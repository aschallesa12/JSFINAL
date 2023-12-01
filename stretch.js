function duplicateElements(inputArray) {
    // Create an object to store the count of each element
    const countMap = {};
    
    // Iterate through the input array and count occurrences
    inputArray.forEach((element) => {
        countMap[element] = (countMap[element] || 0) + 1;
    });

    // Filter elements that have a count greater than 1
    const resultArray = Object.keys(countMap)
        .filter((key) => countMap[key] > 1)
        .map(Number);

    return resultArray;
}

// Example usage:
const inputArray = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
const result = duplicateElements(inputArray);
console.log(result); // Output: [2, 4, 6]