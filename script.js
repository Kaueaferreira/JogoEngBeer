const questions = [
    {
        question: "Sobre o controle de qualidade, no qual envolve testes como o de iodo (para verificar a conversão dos amidos), medição do pH (para acompanhar a acidez) e densidade (para monitorar a fermentação e teor alcoólico), garantindo um produto consistente e seguro. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: true },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Sobre a adição de açúcar, que pode ocorrer antes do envase para estimular a refermentação na garrafa, gerando a carbonatação natural da cerveja. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: true },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Sobre manter os postos de trabalho organizados ajuda na eficiência e na segurança, mesmo sem alterar o produto final. Nesse caso, Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: true },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Sobre a limpeza dos utensílios antes de usá-los, processo este que é necessário para evitar contaminações por microrganismos indesejados, garantindo a pureza, o sabor e a segurança da cerveja. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: true },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Sobre a fervura, que é uma etapa essencial no processo de fabricação da cerveja que ocorre após a mosturação e tem como principais objetivos esterilizar o mosto, extrair e isomerizar os alfa-ácidos do lúpulo (responsáveis pelo amargor). Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: true },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Sobre manusear o gelo e retornar para a bancada, sendo um processo que não interfere na qualidade ou características da cerveja. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: true },
        ]
    },

    {
        question: "Sobre a fermentação, na qual é a etapa em que as leveduras transformam os açúcares do mosto em álcool e gás carbônico, formando a cerveja, ocorrendo em tanques controlados e podendo durar de alguns dias a semanas. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: true },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Sobre o uso de touca para cabelo enquanto estiver no ambiente da produção da cerveja, no qual é fundamental para manter a higiene, evitando que cabelos e partículas contaminem o produto, garantindo a qualidade e segurança da bebida. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: true },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },
    
    {
        question: "Sobre o envase, que é a etapa final da produção da cerveja, onde a bebida é colocada em garrafas, latas ou barris de forma higiênica e sem contato com o oxigênio, garantindo sua qualidade e conservação, tal processo... Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: true },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Sobre o controle de temperatura, que é essencial em várias etapas da produção da cerveja, principalmente na fermentação, onde garante a atividade ideal das leveduras e a qualidade do sabor final, tal processo... Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: true },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Sobre o manuseio dos ingredientes com o uso de luva, sendo uma prática que evita contaminações e garante boas práticas de higiene durante a produção da cerveja, tal processo... Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: true },
            { id: 3, text: "Não agrega valor", correct: false },
        ]
    },

    {
        question: "Organizar os ingredientes na bancada facilita o trabalho, mas não muda o sabor nem a qualidade da cerveja final. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: true },
        ]
    },

    {
        question: "Movimentações dentro do ambiente de produção fazem parte da rotina, mas não influenciam diretamente o resultado final da cerveja. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: true },
        ]
    },

    {
        question: "Refazer as mesmas análises de qualidade pode representar retrabalho, sem trazer melhorias ao produto. Esse processo:",
        answers: [
            { id: 1, text: "Agrega valor", correct: false },
            { id: 2, text: "Não agrega valor mais é necessário", correct: false },
            { id: 3, text: "Não agrega valor", correct: true },
        ]
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