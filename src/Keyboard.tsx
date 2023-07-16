import "./keyboard.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
type KeyboardProps = {
  addGuessedLetter: (letter: string) => void;
};
const Keyboard = ({ addGuessedLetter }: KeyboardProps) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        maxWidth: "800px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "1rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      {KEYS.map((key) => {
        return (
          <button
            className="button"
            key={key}
            style={{
              width: "75px",
              margin: "0 .5rem",
              border: "1px solid #ccc",

              padding: "0.5rem",
              cursor: "pointer",
            }}
            onClick={() => addGuessedLetter(key)}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
