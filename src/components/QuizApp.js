import React, { useEffect, useState } from "react";
import getQuizQuestions from "../api/QuizApi";
import QuizQuestion from "./QuizQuestions";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionId, answerId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId
    }));
  };

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        score++;
      }
    });
    setScore(score);
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const quizQuestions = await getQuizQuestions();
      setQuestions(quizQuestions);
    };
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Quiz App</h1>
      {questions.map((question) => (
        <QuizQuestion
          key={question.id}
          question={question}
          answer={answers[question.id]}
          onAnswerChange={handleAnswerChange}
        />
      ))}
      <button onClick={handleSubmit}>Submit</button>
      {score !== null && <p>Your score: {score}</p>}
    </div>
  );
};

export default QuizApp;
