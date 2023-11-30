function addToObj(person, key, value) {
    if (typeof key !== 'string') {
        console.log('Function must be called with a valid key.');
    } else {
        person[key] = value;
    }
}

// Example usage:
let personObject = { name: 'John', age: 25, occupation: 'Engineer' };

// Adding or updating a key-value pair
addToObj(personObject, 'location', 'New York');
console.log(personObject);

// Attempting to use a non-string key
addToObj(personObject, 123, 'Invalid Key'); // This should print the error message
console.log(personObject); // The object remains unchanged