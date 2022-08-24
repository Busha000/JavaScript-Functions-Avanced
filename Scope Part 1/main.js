/*Global console, alert, prompt */

/* var myString = "I Love JavaScript Too Much", 

myReplace = myString.replace("JavaScript", "PHP");

console.log(myString);

console.log(myReplace);
// this example takes 2 seconds to run
const start = Date.now();

console.log('starting timer...');
// expected output: starting timer...

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
  // expected output: seconds elapsed = 2
}, 2000);

var i = 0; 
 do {
  console.log(i);
  i++; 
} while (i <= 10) */


/**
 Syntax: Math.ceil(x); Math: ceil = 4.3 = 5 
 Math: floor = 1.09 = 1 , -7.99 = -8 
 Math: round = 4.3 = 4, 4.5 = 5
 */

 var x = Math.round(1.5)
 console.log(x);