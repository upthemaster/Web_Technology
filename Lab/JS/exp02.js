// Array
let marks = [75, 80, 90, 85, 70];

// Event - display marks when button is clicked
function showMarks() {
    document.getElementById("output").innerHTML =
        "Marks: " + marks.join(", ");
}

// Function to calculate average of array
function calculateAverage() {

    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }

    let average = sum / marks.length;

    document.getElementById("output").innerHTML =
        "Average Marks = " + average;
}