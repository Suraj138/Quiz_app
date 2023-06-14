const quizData = [
    {
        question: "Arrays in java are-?",
        a: "Object references",
        b: "Objects",
        c: "Primitive data type",
        d: "None",
        correct: "c"
    },

    {
        question: "_______ is used to find and fix bugs in the Java programs.?",
        a: "JVM",
        b: "JRE",
        c: "JDK",
        d: "JDB",
        correct: "d"
    },

    {
        question: "Which keyword is used for accessing the features of a package??",
        a: "package",
        b: "import",
        c: "extends",
        d: "export",
        correct: "b"
    },

    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },

    {
        question: "What does CSS stands for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Central Simple Sheets",
        d: "Central Simple sheetpage",
        correct: "b"
    },

    {
        question: "What does HTML stands for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Machine Language",
        c: "Hypertext Marking Language",
        d: "Hypertext Make Langauge",
        correct: "a"
    },

    {
        question: "What year was JavaScript Launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above ",
        correct: "b"
    }
];

// getting elements in javascript
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit');
const answerEls = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
        <button onclick="location.reload()">Reload</button>`;
        }
    }
});
