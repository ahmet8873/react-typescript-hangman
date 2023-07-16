type HangmanWordProps = {
  wordToGuess: string;
  guessedLetters: string[];
  numberOfGuesses: number;
};

const HangmanWord = ({
  wordToGuess,
  guessedLetters,
  numberOfGuesses,
}: HangmanWordProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        if (numberOfGuesses === 6) {
          return (
            <span
              style={{
                borderBottom: ".1em solid black",
              }}
              key={index}
            >
              <span
                style={{
                  color: guessedLetters.includes(letter) ? "black" : "red",
                }}
              >
                {letter}
              </span>
            </span>
          );
        }
        return (
          <span
            style={{
              borderBottom: ".1em solid black",
            }}
            key={index}
          >
            <span
              style={{
                visibility: guessedLetters.includes(letter)
                  ? "visible"
                  : "hidden",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
};

export default HangmanWord;
