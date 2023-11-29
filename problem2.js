function oddIndices(array) {
    return array.filter((element, index) => index % 2 !== 0)
}
console.log(oddIndices([0, 2, 4, 9]))