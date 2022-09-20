

// IF / ELSE
/* const age = 10;
const firstName = 'Ivan';

if (age >= 18) {
    console.log(`${firstName} can start driving license 🚗.`);
} else {
    const yearsLeft = 18 - age;
    console.log(`${firstName} is too young. Wait another ${yearsLeft} years 😉.`);
}



const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
 */


// Conversion and Coercion

// type conversion
/* const inputYear = '1991';
console.log(inputYear) // 1991
console.log(typeof inputYear) // string
console.log(Number(inputYear), inputYear); // 1991 '1991'
console.log(inputYear + 18) // 199118
console.log(Number(inputYear) + 18) // 2009
console.log(Number('Ivan')) // NaN
console.log(typeof NaN); //number
console.log(String(23), 23) // 23 23 
console.log(typeof(String(23)), typeof(23)) // string , number


// type coercion
console.log('I am ' + 23 + ' years old'); // I am 23 years old // number to string
console.log('23' - '10' - 3) // 10
console.log('23' * '2') // 46

let n = '1' + 1; // 11
n = n - 1; // 11 = 11 - 1
console.log(n) // 10 */

// Truthy and Falsy Values 


/* console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); // true
console.log(Boolean('')); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

const money = 0;

if(money) { // coercion
    console.log("Don't spend it all");
} else {
    console.log('You should get a job')
}

let height; // undefined // false // if height is 0 will back false again
console.log(height);

if (height) {
    console.log('Height is Defined');
} else {
    console.log('Height is Undefined')
}
 */

// ---------------------     Equality operators

// = assignment 
// == loose equality operator
// === strict equality operators


/* '18' == 18 // true // does type coercion
'18' === 18 // false // does not type coercion

const age = 18; // change to '18'

if (age === 18) console.log('You became an adult(strict)');

if (age == 18) console.log('You became an adult(loose)'); */

/* const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite)
console.log(typeof favourite)

if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7 ) {
    console.log('7 is also a cool number');
} else if (favourite === 9 ) {
    console.log('9 is also a cool number');
} else {
    console.log(' Number is not 23 or 7 or 9')
}

if (favourite !== 23) {
    console.log('Why not 23?')
} */


// ---------------------     Logical Operators


/* const hasDriversLicence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicence && hasGoodVision); 
console.log(hasDriversLicence || hasGoodVision); 
console.log(!hasDriversLicence);

// if (hasDriversLicence && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive ...');
// }


const isTired = false; // C
console.log(hasDriversLicence && hasGoodVision && isTired);


if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive ...');
} */


// ---------------------     The Switch statements

/* const day = 'thursday';

switch (day) {
    case 'monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day!');
}


if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day!');
} */


// Basic calculator to try switch statements
/* const number1 = Number(prompt('Enter number'));

const operator = prompt('Operator');

const number2 = Number(prompt('Enter number'));

switch (operator) {
    case '+' :
        alert(number1 + number2);
        break;
    case '-' :
        alert(number1 - number2);
        break;
    case '*' :
        alert(number1 * number2);
        break;
    case '/' :
        alert(number1 / number2);
        break;
    default:
        alert('Not valid operator of number')
}
 */


// ---------------------     The Conditional (Ternary) Operator

const age = 15;

age >= 18 ? console.log('I like to drink 🍷') : console.log('I like to drink 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink)

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water if/else 💧';
}

console.log(drink2)

console.log(`I like to drink ${age >= 18 ? 'whine' : 'water'}`)