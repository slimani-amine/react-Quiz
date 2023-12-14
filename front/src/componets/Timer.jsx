import React, { useEffect } from "react";

export default function Timer({ dispatch, secondRemaining }) {
  const mins = Math.floor(secondRemaining / 60);
  const seconds = secondRemaining % 60;
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return function () {
      clearInterval(id);
    };
  }, [dispatch]);
  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins} : {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
