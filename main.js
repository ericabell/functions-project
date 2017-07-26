// grn returns a random int for the exercises below.
function grn() {
  return( Math.floor(Math.random()*10000) );
}

// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(a,b){
    return Math.max(a,b);
}

console.log('Ex 1: ' + max(grn(),grn()));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a,b,c){
    return Math.max(a,b,c);
}

console.log('Ex 2: ' + maxOfThree(grn(),grn(),grn()));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    var vowels = ['a','e','i','o','u'];
    return( vowels.indexOf(char) > -1 );
}

console.log('Ex 3a (true): ' + isVowel('e'));
console.log('Ex 3b (false): ' + isVowel('f'));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(a,b) {
  return( a+b );
}

console.log('Ex 4: ' + sum(grn(),grn()));


// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function averageOfThree(a,b,c) {
  return( (a+b+c)/3 );
}

console.log('Ex 5: ' + averageOfThree(grn(),grn(),grn()));


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(aString) {
  return( aString.length );
}

console.log('Ex 6: ' + getLength('me'));

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(a,b) {
  if( b>a ) {
    return true;
  }
  return false;
}

console.log('Ex 7: ' + greaterThan(grn(),grn()));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet(name) {
  return 'Hello, ' + name + '!';
}

console.log('Ex 8: ' + greet('Eric'));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(a,b,c,d) {
  return a + ' brown ' + b + ' jumps ' + c + ' the ' + d;
}

console.log('Ex 9: ' + madlib('quick', 'fox', 'over', 'fence'));
