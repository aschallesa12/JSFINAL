function ageToAbilities(age) {
    if (age < 16) {
        return "You can't drive";
    } else if (age <= 17) {
        return "You can drive but not vote"
    } else if (age <= 24) {
        return "You can vote but not rent a car"
    } else {
        return "You can do pretty much anything"
    }
      
}
console.log(ageToAbilities(16))

