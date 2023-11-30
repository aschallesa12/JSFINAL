function getPlace(highScores, newScore) {
    let place = 1;

    for (let i = 0; i < highScores.length; i++) {
        if (newScore > highScores[i]) {
            return ordinalSuffix(place) + " place";
        }
        place++;
    }

    return ordinalSuffix(place) + " place";
}

function ordinalSuffix(number) {
    if (number === 1) {
        return "1st";
    } else if (number === 2) {
        return "2nd";
    } else if (number === 3) {
        return "3rd";
    } else {
        return number + "th";
    }
}

// Examples:
//console.log(getPlace([60, 30, 10], 90));     // '1st place'
//console.log(getPlace([60, 30, 10], 50));     // '2nd place'
//console.log(getPlace([60, 30, 10], 15));     // '3rd place'
console.log(getPlace([500, 300, 200], 100)); // '4th place'