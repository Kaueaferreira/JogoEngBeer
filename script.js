const questions = [
    {
        question: "Quem é o melhor aluno do Senac",
        answers: [
            { id: 1, text: "Sabrina", correct: false },
            { id: 2, text: "Matheus", correct: false },
            { id: 3, text: "Kauê", correct: true },
            { id: 4, text: "Guilherme", correct: false },
        ]
    },

    {
        question: "Quem é o aluno que não gosta de molho de alho no seu Hambúrguer?",
        answers: [
            { id: 1, text: "Sabrina", correct: false },
            { id: 2, text: "Matheus", correct: true },
            { id: 3, text: "Kauê", correct: false },
            { id: 4, text: "Guilherme", correct: false },
        ],
    },

]

const questionElement = document.getElementById("question");
const anwerButtons = document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState(){
    nextButton.style.display = "none";
    while (anwerButtons.firstChild) {
        anwerButtons.removeChild(anwerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnsWer);
        anwerButtons.appendChild(button);
    });
}

function selectAnsWer(e){
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)[0];

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(anwerButtons.children).forEach((button) => {
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML =`Você Acertou ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Jogar Denovo";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    }
    else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }

} )

function irParaOutraArea() {
  window.location.href = "jogo.html";
}

startQuiz();