function firstPunctuationIndex(str) {
    for (let i = 0; i < str.length; i++) {
        if (['.', '?', '!'].includes(str[i])) {
            return i;
        }
    }
    return -1;
}

// Example usage:
console.log(firstPunctuationIndex('alright alright'))