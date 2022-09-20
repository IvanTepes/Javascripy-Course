console.log('');
// ! FUNDAMENTALS-1 CHALLENGE 1

console.log('');
console.log('FUNDAMENTALS-1 CHALLENGE 1');

console.log(`Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall`);

// ! FUNDAMENTALS-1 CHALLENGE 2
console.log('');
console.log('FUNDAMENTALS-1 CHALLENGE 2');
console.log(`Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉`);

// Data 1
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// Data 2
// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;

console.log(`
        Mark body mass ===> ${markBMI}.
        John body mass ===> ${johnBMI}.
        Mark have higher Body Mass Index ===> ${markHigherBMI}.

`);

console.log(markBMI, johnBMI, markHigherBMI);

/* Using if else */

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / (johnHeight * johnHeight);

console.log(`Mark's BMI ==> ${markBMI}`);
console.log(`John's BMI ==> ${johnBMI}`);
console.log(`Mark BMI is higher than John's BMI ==> ${markHigherBMI}`);

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}

if (markHigherBMI === true) {
    console.log(
        `Mark BMI (${markBMI.toPrecision(
            3
        )}) is higher that John's (${johnBMI.toPrecision(3)})!`
    );
} else {
    console.log(
        `John's BMI (${johnBMI.toPrecision(
            3
        )}) is higher that Mark's (${markBMI.toPrecision(3)})!`
    );
}

if (markBMI > johnBMI) {
    console.log(
        `Mark BMI (${markBMI.toPrecision(
            3
        )}) is higher that John's (${johnBMI.toPrecision(3)})!`
    );
} else {
    console.log(
        `John's BMI (${johnBMI.toPrecision(
            3
        )}) is higher that Mark's (${markBMI.toPrecision(3)})!`
    );
}
