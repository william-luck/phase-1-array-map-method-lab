const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// arrow function, okay. 
const titleCased = () => {
  const bigBoiArray = []
  for (let i = 0; i < tutorials.length; i++) {
    bigBoiArray.push(tutorials[i].split(' '))
  }

  for (const element of bigBoiArray) {
    for (let i = 0; i < element.length; i++) {
      element[i] = element[i][0].toUpperCase() + element[i].substring(1);
    }
  }

  const newArray = bigBoiArray.map(element => element.join(" "));
  return newArray
}

// We need to capitalize first letter of every word....

// Iterate through the array, we know it uses map somewhere. 
    // Then, on each iteratoin, iterate through the element.
        // encounters new word (maybe space?), then do something. 

// How to update just the first letter? I know we made an array of the letters before, we could do that, but.... 


// Let's first get an array of each individual word.

// We have an array of each word in the string list, with a different index number and nested array
// const bigBoiArray = []
// for (let i = 0; i < tutorials.length; i++) {
//   bigBoiArray.push(tutorials[i].split(' '))
// }

// // console.log("before", bigBoiArray);

// for (const element of bigBoiArray) {
//   for (let i = 0; i < element.length; i++) {
//     console.log(element[i]);
//     element[i] = element[i][0].toUpperCase() + element[i].substring(1);
//   }
// }




// const newArray = bigBoiArray.map(element => element.join(" "));
// damn the map method coming in clutch. Think about it: 
    // iterate through the array, return new array modified on the callback. 
    // Don't really understand why I couldn't just do const element of array, but oka. 
  















