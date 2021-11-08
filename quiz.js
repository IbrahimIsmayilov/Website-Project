// Variable To Store HTML Elements
let questionEl1 = document.getElementById("questionInput1");
let questionEl2 = document.getElementById("questionInput2");
let questionEl3 = document.getElementById("questionInput3");
let questionEl4 = document.getElementById("questionInput4");
let answerEl1 = document.getElementById("answerOutput1");
let answerEl2 = document.getElementById("answerOutput2");
let answerEl3 = document.getElementById("answerOutput3");
let answerEl4 = document.getElementById("answerOutput4");
let scorepEl = document.getElementById("scorePercentage");
let scorefEl = document.getElementById("scoreFraction");
let btnEl = document.getElementById("btn");
let feedbackEl = document.getElementById("feedback");
let missedQEl = document.getElementById("missedQ");

// Event Listeners
btnEl.addEventListener("click", results);

// Event Function
function results() {

    let scoreF = 0;
    let question1 = questionEl1.value.toLowerCase();
    let question2 = questionEl2.value.toLowerCase();
    let question3 = questionEl3.value.toLowerCase();
    let question4 = questionEl4.value.toLowerCase();

    // Check Question 1
    if (question1 === "" ) {
        answerEl1.innerHTML = "Required!";
        questionEl1.style.border = "3px solid black";
    } else if (question1 === "usa" || question1 === "us" || question1 === "united states of america" || question1 === "united states" ) {
        answerEl1.innerHTML = "Correct!"
        document.getElementById("flag.jpg").style.display = 'none';
        questionEl1.style.border = "3px solid green";
        scoreF++;
    } else {
        answerEl1.innerHTML = "Incorrect!"
        questionEl1.style.border = "3px solid red";
    }

    // Check Question 2
    if (question2 === "" ) {
        answerEl2.innerHTML = "Required!";
        questionEl2.style.border = "3px solid black";
    } else if (question2 === "ww2" || question2 === "world war two" || question2 === "world war 2") {
        answerEl2.innerHTML = "Correct!"
        questionEl2.style.border = "3px solid green";
        scoreF++;
    } else {
        answerEl2.innerHTML = "Incorrect!"
        questionEl2.style.border = "3px solid red";
    }

    // Check Question 3
    if (question3 === "" ) {
        answerEl3.innerHTML = "Required!";
        questionEl3.style.border = "3px solid black";
    } else if (question3 === "1") {
        answerEl3.innerHTML = "Correct!"
        questionEl3.style.border = "3px solid green";
        scoreF++;
    } else {
        answerEl3.innerHTML = "Incorrect!"
        questionEl3.style.border = "3px solid red";
    }

    // Check Question 4
    if (question4 === "" ) {
        answerEl4.innerHTML = "Required!";
        questionEl4.style.border = "3px solid black";
    } else if (question4 === "1945") {
        answerEl4.innerHTML = "Correct!"
        questionEl4.style.border = "3px solid green";
        scoreF++;
    } else {
        answerEl4.innerHTML = "Incorrect!"
        questionEl4.style.border = "3px solid red";
    }

    scoreP = (scoreF / 4) * 100;

    // Outputting a score
    if (scoreF === 4) {
        scorefEl.innerHTML = scoreF + "/4";
        scorepEl.innerHTML = scoreP + "% ";
        feedbackEl.innerHTML = "Above and Beyond. Good Job."
    } else if (scoreF === 3) {
        scorefEl.innerHTML = scoreF + "/4";
        scorepEl.innerHTML = scoreP + "% ";
        feedbackEl.innerHTML = "Not Bad."
    } else if (scoreF === 2) {
        scorefEl.innerHTML = scoreF + "/4";
        scorepEl.innerHTML = scoreP + "% ";
        feedbackEl.innerHTML = "There is always room for improvement."
    } else {
        scorefEl.innerHTML = scoreF + "/4";
        scorepEl.innerHTML = scoreP + "% ";
        feedbackEl.innerHTML = "At least you tried.";
    }
    
    // Check Blank Questions
    if (question1 === "" || question2 === "" || question3 === "" || question4 === "") {
            missedQEl.style.display = "block";
            scorefEl.style.display = "none";
            scorepEl.style.display = "none";
            feedbackEl.style.display = "none";
        } else {
            scorefEl.style.display = "block";
            scorepEl.style.display = "block";
            feedbackEl.style.display = "block";
            missedQEl.style.display = "none";
        }
        
}









































    
    // Check Question 1
    // if (question1 = "") {
    //     answerOutputEl2.innerHTML = "Required!";
    // } else if (question1 === "usa" || question1 === "united states" || question1 === "united states of america") {
    //     document.getElementById("flag.jpg").style.display = 'none';
    //     answerOutputEl1.innerHTML = "Correct!";
    //     score ++;
    // } else {
    //     answerOutputEl1.innerHTML = "Incorrect!";
    // }

    // // Check Question 2
    // if (question2 === "") {
    //     answerOutputEl1.innerHTML = "Required!";
    // } else if (question2 === "ww2" || question1 === "world war 2" || question1 === "world war two") {
    //     answerOutputEl1.innerHTML = "Correct!";
    //     score ++;
    // } else {
    //     answerOutputEl1.innerHTML = "Incorrect!";
    // }

    // // Check Question 3
    // if (question3 === "") {
    //     answerOutputEl3.innerHTML = "Required!";
    // } else if (question3 === "1") {
    //     answerOutputEl1.innerHTML = "Correct!";
    //     score ++;
    // } else {
    //     answerOutputEl1.innerHTML = "Incorrect!";
    // }


    // // Check Question 4
    // if (question4 === "") {
    //     answerOutputEl4.innerHTML = "Required!";
    //     questionInputEl4.style.border = "3px solid red";
    // } else if (question4 === "1945") {
    //     answerOutputEl1.innerHTML = "Correct!";
    //     score ++;
    // } else {
    //     answerOutputEl1.innerHTML = "Incorrect!";
    // }



    // if (question1 === "" || question2 === "" || question3 === "" || question4 === "") {
    //     missedQEl.style.display = "block";
    // } else {
    //     scoreFractionEl.style.display = "block";
    //     scorePercentageEl.style.display = "block";
    // }


