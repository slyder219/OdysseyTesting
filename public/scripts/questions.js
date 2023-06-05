const nextButton = document.getElementById('next');
const question = document.getElementById('question');
const answer = document.getElementById('answer');

nextButton.addEventListener('click', handleNext);

const displayer = {
    "This is Q 1" : ["A1", "A2", "A3", "A4"],
    "This is Q 2" : ["B1", "B2", "B3", "B4"],
    "This is Q 3" : ["C1", "C2", "C3", "C4"],
    "This is Q 4" : ["D1", "D2", "D3", "D4"],
    "This is Q 5" : ["E1", "E2", "E3", "E4"],
    "This is Q 6" : ["F1", "F2", "F3", "F4"]
}

let counter = 0;

function handleNext() {

    counter += 1;

    if (Object.keys(displayer)[counter-1] === undefined) {
        const button = document.getElementById('next');
        button.innerHTML = "Submit";
        // handle submission
    } else {

        question.innerHTML = Object.keys(displayer)[counter-1];
        answer.innerHTML = Object.values(displayer)[counter-1];

    }
    

}