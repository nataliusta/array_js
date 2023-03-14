let scores = [60, 50, 60, 58, 54, 54, // new array
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];

function printAndGetHighScore (scores) {

    let highScore = 0; // max result with default value zero
    let output;

    for (let i = 0; i < scores.length; i++) { // iteration array elements

        output = "Bubble solution " + i + " score: " + scores[i]; // output results
        console.log(output);
        if (scores[i] > highScore) { // if current result more than max result (highScore) it becomes a new highScore
            highScore = scores[i];
        }
    }
    return highScore;
}

let highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubbles score: " + highScore);

let bestSolutions = []; // empty array for new max results

for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) { // in case current result = max result (highScore) add i to bestSolutions
        bestSolutions.push(i); // add new index to array
    }
}
console.log("Solutions with the highest score: " + bestSolutions);
