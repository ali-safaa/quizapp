import quizData from './data.js';

let radio = document.querySelectorAll('[data-radio]');
let question = document.querySelector('[data-question]');
let text_1 = document.querySelector('[data-text_1]');
let text_2 = document.querySelector('[data-text_2]');
let text_3 = document.querySelector('[data-text_3]');
let text_4 = document.querySelector('[data-text_4]');
let next = document.querySelector('[data-next]');
let container = document.querySelector('[data-container]');

let numberOfQuestions = 0;
let score = 0;

function showQuestion() {
  deSelectRadio();
  question.innerHTML = quizData[numberOfQuestions].Q;
  text_1.innerHTML = quizData[numberOfQuestions].a;
  text_2.innerHTML = quizData[numberOfQuestions].b;
  text_3.innerHTML = quizData[numberOfQuestions].c;
  text_4.innerHTML = quizData[numberOfQuestions].d;
}

showQuestion();

function getInputId() {
  let answer;
  radio.forEach((radio) => {
    if (radio.checked) {
      answer = radio.id;
    }
  });
  return answer;
}

next.addEventListener('click', nextQuestion);

function nextQuestion() {
  let answer = getInputId();

  if (answer) {
    if (answer === quizData[numberOfQuestions].currect) {
      score++;
    }
    numberOfQuestions++;
    if (numberOfQuestions < quizData.length) {
      showQuestion();
    } else {
      container.innerHTML = `<p class="container">you answers is currect from ${score} / ${quizData.length}</p>`;
    }
  }
}

function deSelectRadio() {
  radio.forEach((radio) => {
    radio.checked = false;
  });
}
