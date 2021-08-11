// targetting elements
let question = document.querySelector('#question');
let choices = Array.from(document.querySelectorAll('.choice-text'));
let progressText = document.querySelector('#question');
let scoreText = document.querySelector('#score');
let progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Quiz Questions

let questions = [
    {
        question: "what is 2 + 2?",
        choice1: 2,
        choice2: 4,
        choice3: 21,
        choice4: 17,
        answer: 2,
    },
    {
        question: "what is 2 + 2?",
        choice1: 2,
        choice2: 4,
        choice3: 21,
        choice4: 17,
        answer: 2,
    },
    {
        question: "what is 4 + 4?",
        choice1: 6,
        choice2: 10,
        choice3: 8,
        choice4: 22,
        answer: 3,
    },
    {
        question: "what is 5 + 5?",
        choice1: 10,
        choice2: 15,
        choice3: 20,
        choice4: 11,
        answer: 1,
    }
]

let SCORE_POINTS = 100;
let MAX_QUESTIONS = 4;

function startGame () {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    let questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    questions.innerText = currentQuestion.question;

    choices.forEach(choice => {
        let number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        let selectedChoice = e.target;
        let selectedAnswer = selectedChoice.dataset('number');

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect';

        /* points added if answer correct */
        if(classToApply === 'correct') {
            incremementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion()
        }, 1000)

    })
})

incremementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame ()