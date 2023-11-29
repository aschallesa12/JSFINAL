function numOddValues(array) {
    return array.filter(element => element % 2 !== 0).length;
}
console.log(numOddValues([]))