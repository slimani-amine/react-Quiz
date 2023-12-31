import React from "react";
import { useQuiz } from "../contexts/QuizContext";

export default function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}

function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, i) => {
        return (
          <button
            className={`btn btn-option ${i === answer ? "answer" : ""} ${
              hasAnswered
                ? i === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            key={`option : ${i}`}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: i })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
