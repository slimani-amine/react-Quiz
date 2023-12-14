import React from "react";

export default function FinishScreen({ points, maxPossiblePoints, highScore , dispatch }) {
  const pourcentage = (points / maxPossiblePoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints} (
        {Math.ceil(pourcentage)} %)
      </p>
      <p className="highscore"> (Highscore : {highScore} points )</p>
      <button
        className="btn btn-ui"
        onClick={() => {
          dispatch({ type: "restart" });
        }}
      >
        Restart
      </button>
    </>
  );
}
