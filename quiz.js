// Variable To Store HTML Elements
let questionInputEl1 = document.getElementById("question-input-1"); 
let questionInputEl2 = document.getElementById("question-input-2");
let questionInputEl3 = document.getElementById("question-input-3");
let questionInputEl4 = document.getElementById("question-input-4");
let answerOutputEl1 = document.getElementById("answer-output-1");
let answerOutputEl2 = document.getElementById("answer-output-2");
let answerOutputEl3 = document.getElementById("answer-output-3");
let answerOutputEl4 = document.getElementById("answer-output-4");
let scoreEl = document.getElementById("score");
let submitBtnEl = document.getElementById("submit-btn");

// Global Variables
score = 0;

// Event Listeners
submitBtnEl.addEventListener("click", results);

// Event Function
function results() {
    let question1 = questionInputEl1.value.toLowerCase();
    let question2 = questionInputEl2.value.toLowerCase();
    let question3 = questionInputEl3.value.toLowerCase();
    let question4 = questionInputEl4.value.toLowerCase();

    if (question1 === "") {
        document.getElementById("flag.jpg").style.display='none';
        answerOutputEl1.innerHTML = "Please answer question 1. A try is better than nothing";
    } else if (question1 === "usa" || question1 === "united states" || question1 === "united states of america") {

    }
}
















