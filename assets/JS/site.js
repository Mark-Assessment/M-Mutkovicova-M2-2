let total = 0;

/* Question 1 validation */
const q1Elements = document.querySelectorAll(".q-1-answer");

function handleQ1Selection(event) {
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