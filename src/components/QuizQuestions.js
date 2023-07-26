import React from "react";

const QuizQuestion = ({ question, answer, onAnswerChange }) => {
  const handleSelectedOption = (event) => {
    onAnswerChange(question.id, event.target.value);
  };

  return (
    <div>
      <h3>{question.question}</h3>
      <form>
        {question.options.map((option) => (
          <div key={option.id}>
            <label>
              <input
                type="radio"
                name={question.id}
                value={option.id}
                checked={answer === option.id}
                onChange={handleSelectedOption}
              />
              {option.value}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default QuizQuestion;
