// targetting elements
const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#question');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Quiz Questions

let questions = [
    {
        question: "Which country did Vietnam claimed independence from in 1945?",
        choice1: 'Spain',
        choice2: 'France',
        choice3: 'Portugal',
        choice4: 'England',
        answer: 2,
    },
    {
        question: "In which country would you find the wine making region, the Yarra Valley?",
        choice1: 'Australia',
        choice2: 'New Zealand',
        choice3: 'South Africa',
        choice4: 'Argentina',
        answer: 1,
    },
    {
        question: "How many Oceans does the USA border?",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: 3,
    },
    {
        question: "What animal is responsible for the most human deaths each year?",
        choice1: 'Cow',
        choice2: 'Shark',
        choice3: 'Mosquito',
        choice4: 'Rat',
        answer: 3,
    },
    {
        question: "	What does a nidoligist study?",
        choice1: 'Birds Nests',
        choice2: 'Clouds',
        choice3: 'Caves',
        choice4: 'Waves',
        answer: 1,
    },
    {
        question: "Who said 'I spent a lot of money on booze, birds and fast cars. The rest i squandered?'",
        choice1: 'Charlie Sheen',
        choice2: 'George Best',
        choice3: 'Hugh Hefner',
        choice4: 'Michael Jordan',
        answer: 2,
    },
    {
        question: "nemophobia is the fear of what?",
        choice1: 'Wind',
        choice2: 'Fire',
        choice3: 'The Dark',
        choice4: 'Spiders',
        answer: 1,
    },
    {
        question: "How long is a marathon?",
        choice1: '28.7 miles',
        choice2: '26.2 miles',
        choice3: '23.4 miles',
        choice4: '21.3 miles',
        answer: 2,
    },
    {
        question: "How many oscars did the movie Titanic win?",
        choice1: '8',
        choice2: '9',
        choice3: '10',
        choice4: '11',
        answer: 4,
    },
    {
        question: "What angle is formed by the hands of a clock at 4 O'Clock?",
        choice1: '90 degrees',
        choice2: '100 degrees',
        choice3: '110 degrees',
        choice4: '120 degrees',
        answer: 4,
    },
    {
        question: "What animal is know for the 'Great Migration' across the African plains?",
        choice1: 'Lions',
        choice2: 'Elephants',
        choice3: 'Wildebeast',
        choice4: 'Gazelles',
        answer: 3,
    },
    {
        question: "The Kiwifruit is native to which country?",
        choice1: 'India',
        choice2: 'New Zealand',
        choice3: 'China',
        choice4: 'Indonesia',
        answer: 3,
    },
    {
        question: "What is the collective name for a group of owls?",
        choice1: 'Government',
        choice2: 'Senate',
        choice3: 'Council',
        choice4: 'Parliament',
        answer: 4,
    },
    {
        question: "What is the longest river in the world?",
        choice1: 'Nile',
        choice2: 'Niger',
        choice3: 'Amazon',
        choice4: 'Yangtze',
        answer: 3,
    },
    {
        question: "How many bones are their in an adult human skeleton?",
        choice1: '286',
        choice2: '246',
        choice3: '216',
        choice4: '206',
        answer: 4,
    },
    {
        question: "How many gold medals did Usain Bolt win?",
        choice1: '8',
        choice2: '6',
        choice3: '10',
        choice4: '12',
        answer: 1,
    },
    {
        question: "What is the highest grossing film of all time?",
        choice1: 'Titanic',
        choice2: 'Avengers: Endgame',
        choice3: 'Avatar',
        choice4: 'Avengers: Infinity War',
        answer: 2,
    },
    {
        question: "How many countries in the world begin with the letter F?",
        choice1: 2,
        choice2: 3,
        choice3: 4,
        choice4: 5,
        answer: 2,
    }
    {
        question: "Who is the greek god of love?",
        choice1: 'Ares',
        choice2: 'Eros',
        choice3: 'Posedion',
        choice4: 'Aphrodite',
        answer: 2,
    }
    {
        question: "Lando Norris is a famous name in which sport?",
        choice1: 'Football',
        choice2: 'Cricket',
        choice3: 'Formula 1',
        choice4: 'Boxing',
        answer: 3,
    }
];

let SCORE_POINTS = 10;
let MAX_QUESTIONS = 5;

/* counters and numbers for start of game */
function startGame () {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

function getNewQuestion() {
    // keep track of score
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('./end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    /* generating random questions from array */
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset.number;
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}


/* calculating if answers are incorrect or incorrect */

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset.number;

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct': 'incorrect';

        /* points added if answer correct */
        if(classToApply === 'correct') {
            incremementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        /* new questions loaded */
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
});

incremementScore = num => {
    score +=num;
    scoreText.innerText = score;
};

startGame ();

