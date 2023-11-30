function getPlace(highScores, newScore) {
    let place = 1;

    for (let i = 0; i < highScores.length; i++) {
        if (newScore > highScores[i]) {
            return "Congratulations! You got " + place + " place.";
        }
        place++;
    }

    // If the new score is the lowest, it would be in the last place
    return "You got " + place + " place. Keep it up!";
}
console.log(getPlace([500, 300, 200], 100))


// Example usage:
//let scores = [120, 90, 85, 75, 60];
//let newScore = 80;
//let result = getPlace(scores, newScore);
//console.log(result);