const quizQuestions = [
  {
    id: "1",
    question: "What is the capital of France?",
    options: [
      { id: "a", value: "Paris" },
      { id: "b", value: "Madrid" },
      { id: "c", value: "Rome" },
      { id: "d", value: "Berlin" }
    ],
    answer: "a"
  },
  {
    id: "2",
    question: "Who invented the telephone?",
    options: [
      { id: "a", value: "Alexander Graham Bell" },
      { id: "b", value: "Thomas Edison" },
      { id: "c", value: "Nikola Tesla" },
      { id: "d", value: "Guglielmo Marconi" }
    ],
    answer: "a"
  },
  {
    id: "3",
    question: "What is the largest country in the world?",
    options: [
      { id: "a", value: "Russia" },
      { id: "b", value: "Canada" },
      { id: "c", value: "China" },
      { id: "d", value: "Brazil" }
    ],
    answer: "a"
  }
];
export default function getQuizQuestions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(quizQuestions);
    }, 1000);
  });
}
