function averageStringLength(strings) {
    if(!strings || strings.length === 0) {
        return 0;
    }
    const totalLength = strings.reduce((acc, str) => acc + str.length, 0);
    const averageLength = totalLength / strings.length;
    return averageLength;
}
console.log(averageStringLength(['oh', 'hello']))