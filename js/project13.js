// set the questions============
const questions = [
  {
    question: "What is React?",
    answers: [
      {
        text: "react is a JavaScript library for building user interfaces",
        correct: true,
      },
      { text: "react is a framework", correct: false },
      { text: "react is a program", correct: false },
    ],
  },
  {
    question: "What is the correct command to create a React application?",
    answers: [
      { text: "npx create-react-app my-taem", correct: true },
      { text: "npx start-react-app my-taem", correct: false },
      { text: "npx init-react-app my-taem", correct: false },
    ],
  },
  {
    question: "What is NOT a correct syntax for declaring variables?",
    answers: [
      { text: "let x;", correct: false },
      { text: "const x;", correct: false },
      { text: "dim x;", correct: true },
    ],
  },
  {
    question: "How many properties do the object have?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "0", correct: false },
    ],
  },
];
// creating variables=========
const questionElements = document.getElementById("question");
const answerButtons = document.getElementById("answer_buttons");
const nextButton = document.getElementById("next_btn");

// to change the question number & score change==========

let currentQuestionIndex = 0;
let score = 0;

// function for start quiz==================
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

// function for showQuestion===========
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElements.innerHTML = questionNo + " . " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct; 
    }
    button.addEventListener("click", selectAnswer)
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";

}
 function showScore(){
  resetState();
  questionElements.innerHTML= `You scroed ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display ="block";
 }
function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click", () => {
if(currentQuestionIndex < questions.length){
  handleNextButton();
}
else{
  startQuiz();
}
} )
startQuiz()

