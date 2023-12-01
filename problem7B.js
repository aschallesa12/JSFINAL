function addToObj(person, key, value) {
    // Check if the key is a string
    if (typeof key !== 'string') {
      console.log('Function must be called with a valid key.');
      return;
    }
  
    // Update or add the key-value pair to the object
    person[key] = value;
  
    // Alternatively, if you want to avoid modifying the original object directly,
    // you can create a new object with the added key-value pair:
    // const updatedPerson = { ...person, [key]: value };
  
    // No need to return anything, as the changes are saved in the original object
  }
  
  // Example usage:
  let obj = {
    user: 'teacher',
    birthday: 'January 1st',
    favoriteColor: 'yellow',
  };
  
  addToObj(obj, 'homeState', 'tennessee');
 // console.log(obj); // { user: 'teacher', birthday: 'January 1st', favoriteColor: 'yellow', homeState: 'tennessee' }
  
  addToObj(obj, 'parentsNames', { mother: 'Janine', father: 'Robert' });
  //console.log(obj); // { user: 'teacher', birthday: 'January 1st', favoriteColor: 'yellow', homeState: 'tennessee', parentsNames: { mother: 'Janine', father: 'Robert' } }
  
  addToObj(obj, 'user', 'student');
  //console.log(obj); // { user: 'student', birthday: 'January 1st', favoriteColor: 'yellow', homeState: 'tennessee', parentsNames: { mother: 'Janine', father: 'Robert' } }
  
  addToObj(obj, 7, 'student');
  // Output: Function must be called with a valid key.
  
  console.log(addToObj(obj, 7, 'student'));