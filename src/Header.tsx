type HeaderProps = {
  numberOfGuesses: number;
  restartGame: () => void;
  correctGuesses: string[];
  wordToGuess: string;
};

const Header = ({
  numberOfGuesses,
  restartGame,
  correctGuesses,
  wordToGuess,
}: HeaderProps) => {
  const uniqueCorrectGuesses = Array.from(new Set(correctGuesses));
  const uniqueWordLetters = Array.from(new Set(wordToGuess));
  console.log(`uniqueCorrectGuesses: ${uniqueCorrectGuesses}`);
  console.log(`uniqueWordLetters: ${uniqueWordLetters}`);

  return (
    <div
      style={{
        fontSize: "2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {numberOfGuesses === 6 ? (
        <>
          <span>YOU LOST</span>
          <button
            onClick={restartGame}
            style={{
              padding: "0.5rem",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Restart
          </button>
        </>
      ) : uniqueCorrectGuesses.length === uniqueWordLetters.length ? (
        <>
          <span>YOU WIN</span>
          <button
            onClick={restartGame}
            style={{
              padding: "0.5rem",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Restart
          </button>
        </>
      ) : (
        <span>PLAY HANGMAN</span>
      )}
    </div>
  );
};

export default Header;
