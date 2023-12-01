function duplicateElements(inputArray) {
    var countMap = {};

    // Iterate through the input array and count occurrences
    for (var i = 0; i < inputArray.length; i++) {
        var element = inputArray[i];
        countMap[element] = (countMap[element] || 0) + 1;
    }

    // Filter elements that have a count greater than 1
    var resultArray = Object.keys(countMap)
        .filter(function (key) {
            return countMap[key] > 1;
        })
        .map(Number);

    return resultArray;
}

// Example usage:
var inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
var result = duplicateElements(inputArray);
console.log(result); // Output: [2, 4, 6]