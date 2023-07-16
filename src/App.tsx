import { useEffect, useState } from "react";
import words from "./wordList.json";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import Header from "./Header";

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);

  const incorrectLetters = Array.from(
    new Set(
      guessedLetters.filter((letter) => {
        return !wordToGuess.includes(letter);
      })
    )
  );
  // ////////////////////////////////////////
  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter)) {
      console.log("Letter already guessed!");
      return;
    }
    console.log("Adding guessed letter:", letter);
    setGuessedLetters((prev) => [...prev, letter]);

    if (wordToGuess.includes(letter)) {
      setCorrectGuesses((prev) => [...prev, letter]);
    }
  }
  // /////////////////////////
  console.log(`guessedLetters: ${guessedLetters}`);
  console.log(`incorrectLetters: ${incorrectLetters}`);
  console.log(`correctGuesses: ${correctGuesses}`);

  // ////////////////////////////////
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const lowercaseKey = e.key.toLowerCase();
      if (!(lowercaseKey >= "a" && lowercaseKey <= "z")) {
        return;
      }
      e.preventDefault();
      addGuessedLetter(lowercaseKey);
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  function restartGame(): void {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
  }

  // ////////////////////////////////////////
  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <Header
        numberOfGuesses={incorrectLetters.length}
        restartGame={restartGame}
        correctGuesses={correctGuesses}
        wordToGuess={wordToGuess}
      />
      <HangmanWord
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        numberOfGuesses={incorrectLetters.length}
      />
      <Keyboard addGuessedLetter={addGuessedLetter} />
    </div>
  );
}

export default App;
