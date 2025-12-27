const quiz = [
  {
    question: "What was the first gift I gave You? 💕",
    options: ["Pen 😌", "watch 😏", "earphones 💑"],
    answer: 1
  },
  {
    question: "Which color dress i wore during our first selfie?",
    options: ["green 😊", "red 😎", "pink 😍"],
    answer: 1
  },
  {
    question: "Our first temple visit? 😜",
    options: ["Krishna ", "Vinayagar", "perumal"],
    answer: 0
  },
  {
    question: "On which birthday(year) You gifted me a teddy bear??",
    options: ["2021 😊", "2023😎", "2022😍"],
    answer: 2
  },
  {
    question: "who is my bestfriend?",
    options: ["Nivetha😊", "You", "pradeepa & kausika😍"],
    answer: 1
  },
];

let current = 0;

function loadQuestion() {
  document.getElementById("question").innerText = quiz[current].question;
  document.getElementById("opt0").innerText = quiz[current].options[0];
  document.getElementById("opt1").innerText = quiz[current].options[1];
  document.getElementById("opt2").innerText = quiz[current].options[2];
  document.getElementById("result").innerText = "";
}

function checkAnswer(selected) {
  if (selected === quiz[current].answer) {
    document.getElementById("result").innerText = "Correct 😍 Love u kuttyyy!";
  } else {
    document.getElementById("result").innerText = "Wrong 😜 serupuuu varumm!";
  }
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-box").innerHTML =
      "<h2>You completed the quiz 💖</h2><p>Congratulations, my love 😘</p>";
  }
}

loadQuestion();
