let total = 0;
let answered = 0;

/* Question 1 validation */
const q1Elements = document.querySelectorAll(".q-1-answer");

function handleQ1Selection(event) {
    answered = answered+1;
    q1Elements.forEach(element => {
        element.classList.add("disabled");
    })
    const classes = event.target.classList;
    const isCorrectAnswer = classes.contains("correct-answer");
    if (isCorrectAnswer) {
        event.target.classList.add("btn-outline-success");
        total = total+1;
    } 
    else {
        event.target.classList.add("btn-outline-danger");
    } 
};

q1Elements.forEach(element => {
    element.addEventListener("click", handleQ1Selection);
});

/* Question 2 validation */
const q2Elements = document.querySelectorAll(".q-2-answer");

function handleQ2Selection(event) {
    answered = answered+1;
    q2Elements.forEach(element => {
        element.classList.add("disabled");
    })
    const classes = event.target.classList;
    const isCorrectAnswer = classes.contains("correct-answer");
    if (isCorrectAnswer) {
        event.target.classList.add("btn-outline-success");
        total = total+1;
    } 
    else {
        event.target.classList.add("btn-outline-danger");
    } 
};

q2Elements.forEach(element => {
    element.addEventListener("click", handleQ2Selection);
});

/* Question 3 validation */
const q3Elements = document.querySelectorAll(".q-3-answer");

function handleQ3Selection(event) {
    answered = answered+1;
    q3Elements.forEach(element => {
        element.classList.add("disabled");
    })
    const classes = event.target.classList;
    const isCorrectAnswer = classes.contains("correct-answer");
    if (isCorrectAnswer) {
        event.target.classList.add("btn-outline-success");
        total = total+1;
    } 
    else {
        event.target.classList.add("btn-outline-danger");
    } 
};

q3Elements.forEach(element => {
    element.addEventListener("click", handleQ3Selection);
});

/* Question 4 validation */
const q4Elements = document.querySelectorAll(".q-4-answer");

function handleQ4Selection(event) {
    answered = answered+1;
    q4Elements.forEach(element => {
        element.classList.add("disabled");
    })
    const classes = event.target.classList;
    const isCorrectAnswer = classes.contains("correct-answer");
    if (isCorrectAnswer) {
        event.target.classList.add("btn-outline-success");
        total = total+1;
    } 
    else {
        event.target.classList.add("btn-outline-danger");
    } 
};

q4Elements.forEach(element => {
    element.addEventListener("click", handleQ4Selection);
});

/* Question 5 validation */
const q5Elements = document.querySelectorAll(".q-5-answer");

function handleQ5Selection(event) {
    answered = answered+1;
    q5Elements.forEach(element => {
        element.classList.add("disabled");
    })
    const classes = event.target.classList;
    const isCorrectAnswer = classes.contains("correct-answer");
    if (isCorrectAnswer) {
        event.target.classList.add("btn-outline-success");
        total = total+1;
    } 
    else {
        event.target.classList.add("btn-outline-danger");
    } 
};

q5Elements.forEach(element => {
    element.addEventListener("click", handleQ5Selection);
});

/* Submit button validation */
const submitButton = document.getElementById("submit-btn");
const submitError = document.getElementById("submit-error");
const resultMessage = document.getElementById("result-message");
const myModal = new bootstrap.Modal(document.getElementById('result-modal'), {});
function submission () {
    if (answered < 5) {
        submitError.removeAttribute("hidden");
    }
    else {
        submitError.setAttribute("hidden", true);
        let message = "";
        if (total===0) {
            message = `You got ${total} answers correct. You may need to go and rewatch the series!`
        }
        else if (total<=2) {
            message = `You got ${total} answers correct. You've probably seen a few episodes!`
        }
        else if (total<=4) {
            message = `You got ${total} answers correct. You're definitely a fan!`
        }
        else {
            message = `You got all answers correct. You're a Big Bang Theory superfan!`
        }
        resultMessage.innerHTML = message;
        myModal.show();
    }
};

submitButton.addEventListener("click", submission);

const closeButton = document.getElementById("close-button");
function reloadPage() {window.location.reload()}
closeButton.addEventListener("click", reloadPage);
