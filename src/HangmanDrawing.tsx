const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  ></div>
);

const RIGHTARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-80px",
      rotate: "45deg",
    }}
  ></div>
);

const LEFTARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-10px",
      rotate: "135deg",
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "240px",
      right: "-80px",
      rotate: "45deg",
    }}
  ></div>
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "240px",
      right: "-10px",
      rotate: "135deg",
    }}
  ></div>
);

const bodyParts = [HEAD, BODY, RIGHTARM, LEFTARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  console.log(`numberOfGuesses: ${numberOfGuesses}`);

  return (
    <div style={{ position: "relative" }}>
      {bodyParts.slice(0, numberOfGuesses)}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          height: "50px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{ height: "10px", width: "250px", background: "black" }}
      ></div>
    </div>
  );
};

export default HangmanDrawing;
