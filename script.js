"use strict";

const startButton = document.querySelector(".start");
const main = document.querySelector(".main");
const question = document.querySelector(".question");
const answerButton = document.querySelector(".answer-button");
const nextButton = document.querySelector(".next");
const restartButton = document.querySelector(".restart");

let currentQuestionIndex;
let score = 0;

// Start the game
function startGame() {
  currentQuestionIndex = 0;
  main.style.display = "flex";
  startButton.style.display = "none";
  showQuestions();
}
startButton.addEventListener("click", startGame);

//Display the Questions
function showQuestions() {
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  question.innerHTML = questionNumber + "." + currentQuestion.question;

  answerButton.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.correct = answer.correct;

    button.classList.add("ans");

    //Choosing the answer
    button.addEventListener("click", (e) => {
      const selectedButton = e.target;
      if (selectedButton.correct) {
        selectedButton.classList.add("correct");
        score++;
      } else selectedButton.classList.add("wrong");

      Array.from(answerButton.children).forEach((button) => {
        if (selectedButton.correct === "true") button.classList.add("correct");
        else {
          button.disabled = true;
        }
        console.log(e);
      });
      if (selectedButton) nextButton.style.display = "flex";
    });

    answerButton.appendChild(button);
  });
}
function addNext() {
  nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) showQuestions();
      else {
        question.innerHTML = `You Scored : ${score} out of ${questions.length}`;
        answerButton.style.display = "none";
        nextButton.style.display = "none";
        restartButton.style.display = "flex";
        restartButton.innerHTML = "Play Again";
        restartButton.display = "block";
        restartButton.addEventListener("click", () => {
          restartButton.style.display = "none";
          startGame();
          answerButton.style.display = "block";
        });
      }
    }
  });
}
addNext();
//  Questions and Answers
const questions = [
  {
    question: "How many hearts does an octopus have?",
    answers: [
      { text: 2, correct: false },
      { text: 3, correct: true },
      { text: 4, correct: false },
      { text: 5, correct: false },
    ],
  },
  {
    question: "Which is the only body part that is fully grown from birth?",
    answers: [
      { text: "Eyes", correct: true },
      { text: "Heart", correct: false },
      { text: "Mouth", correct: false },
      { text: "Nails", correct: false },
    ],
  },
  {
    question: "What country has the most islands?",
    answers: [
      { text: "Canada", correct: false },
      { text: "Korea", correct: false },
      { text: "Sweden", correct: true },
      { text: "Kurdistan", correct: false },
    ],
  },
  {
    question:
      "What color dresses do Chinese women traditionally wear on their wedding day?",
    answers: [
      { text: "Blue", correct: false },
      { text: "Gold", correct: false },
      { text: "White", correct: false },
      { text: "Red", correct: true },
    ],
  },
  {
    question:
      "If Sandra’s mother has 4 kids: Tom, James, Carolina, what is the name of the fourth kid?",
    answers: [
      { text: "Sandra", correct: true },
      { text: "Jane", correct: false },
      { text: "Julia", correct: false },
      { text: "Sarah", correct: false },
    ],
  },
];
