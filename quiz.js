// Variable To Store HTML Elements
let questionInputEl1 = document.getElementById("question-input-1");
let questionInputEl2 = document.getElementById("question-input-2");
let questionInputEl3 = document.getElementById("question-input-3");
let questionInputEl4 = document.getElementById("question-input-4");
let answerOutputEl1 = document.getElementById("answer-output-1");
let answerOutputEl2 = document.getElementById("answer-output-2");
let answerOutputEl3 = document.getElementById("answer-output-3");
let answerOutputEl4 = document.getElementById("answer-output-4");
let scorePercentageEl = document.getElementById("score-percentage");
let scoreFractionEl = document.getElementById("score-fraction");
let submitBtnEl = document.getElementById("submit-btn");
let missedQEl = document.getElementById("missed-q");

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

    
    // Check Question 1
    if (question2 = "") {
        answerOutputEl2.innerHTML = "Required!";
    } else if (question1 === "usa" || question1 === "united states" || question1 === "united states of america") {
        document.getElementById("flag.jpg").style.display = 'none';
        answerOutputEl1.innerHTML = "Correct!";
        score ++;
    } else {
        answerOutputEl1.innerHTML = "Incorrect!";
    }

    // Check Question 2
    if (question2 === "") {
        answerOutputEl1.innerHTML = "Required!";
    } else if (question2 === "ww2" || question1 === "world war 2" || question1 === "world war two") {
        answerOutputEl1.innerHTML = "Correct!";
        score ++;
    } else {
        answerOutputEl1.innerHTML = "Incorrect!";
    }

    // Check Question 3
    if (question3 === "") {
        answerOutputEl3.innerHTML = "Required!";
    } else if (question3 === "1") {
        answerOutputEl1.innerHTML = "Correct!";
        score ++;
    } else {
        answerOutputEl1.innerHTML = "Incorrect!";
    }


    // Check Question 4
    if (question4 === "") {
        answerOutputEl4.innerHTML = "Required!";
        questionInputEl4.style.border = "3px solid red";
    } else if (question4 === "1945") {
        answerOutputEl1.innerHTML = "Correct!";
        score ++;
    } else {
        answerOutputEl1.innerHTML = "Incorrect!";
    }



    if (question1 === "" || question2 === "" || question3 === "" || question4 === "") {
        missedQEl.style.display = "block";
    } else {
        scoreFractionEl.style.display = "block";
        scorePercentageEl.style.display = "block";
    }


}