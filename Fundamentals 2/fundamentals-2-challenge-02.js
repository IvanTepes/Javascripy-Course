'use strict';
console.log('');
// ! FUNDAMENTALS-2 CHALLENGE 2

console.log('');
console.log('FUNDAMENTALS-2 CHALLENGE 2');
console.log(`
    Steven is still building his tip calculator, using the same rules as before: Tip 15% of
    the bill if the bill value is between 50 and 300,
    and if the value is different, the tip is 20%.
    
    Your tasks:

    1. Write a function 'calcTip' that takes any bill value as an input and returns
    the corresponding tip, calculated based on the rules above (you can check out
    the code from first tip calculator challenge if you need to). Use the function
    type you like the most. Test the function using a bill value of 100

    2. And now let's use arrays! So create an array 'bills' containing the test data
    below

    3. Create an array 'tips' containing the tip value for each bill, calculated from
    the function you created before

    4. Bonus: Create an array 'totals' containing the total values, so the bill + tip
    Test data: 125, 555 and 44

    Hint: Remember that an array needs a value in each position, and that value can
    actually be the returned value of a function! So you can just call a function as array
    values (so don't store the tip values in separate variables first, but right in the new
    array
`);

// ! Solution1
console.log('Solution 1');

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

function calcTip(bill) {
    if (bill <= 50 || bill >= 300) {
        return bill * (20 / 100);
    } else {
        return bill * (15 / 100);
    }
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(
    `If bill is ${bills[0]} then tip is ${tips[0]} and total is ${totals[0]}`
);
console.log(
    `If bill is ${bills[1]} then tip is ${tips[1]} and total is ${totals[1]}`
);
console.log(
    `If bill is ${bills[2]} then tip is ${tips[2]} and total is ${totals[2]}`
);

console.log(calcTip(100)); // Test 15%
console.log(calcTip(1000)); // Test 20%

// ! Solution 2
console.log('Solution 2');

// Create Random number to be used to create bill
// const randomNumber = randomNumber => randomNumber = Math.random() * 500;

// Format number to currency format
// const toCurrency = number => number = number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

// Calculate a tip from
// function calcTip(bill) {

//     if (bill <= 50 || bill >= 300) {
//         return bill * (20 / 100);
//     } else {
//         return bill * (15 / 100);
//     }
// }

// const bills2 = [randomNumber(),
//                 randomNumber(),
//                 randomNumber()];

// const tips2 = [calcTip(bills[0]),
//                 calcTip(bills[1]),
//                 calcTip(bills[2])];

// const totals2 = [bills2[0] + tips2[0],
//                 bills2[1] + tips2[1],
//                 bills2[2] + tips2[2]];

// function generateBill(bill,tip,total) {

//     bill = toCurrency(bill);
//     tip = toCurrency(tip);
//     total = toCurrency(total);

//     return ` RECIPIENT
//     If bill is ${bill},
//     then tip is ${tip},
//     and total is ${total}`

// }

// console.log(generateBill(bills2[0],tips2[0],totals2[0]));

// ! Solution 3
console.log('Solution 3');

// Create Random number
const randomNumber = randomNumber => (randomNumber = Math.random() * 500);

// Format number to currency format
const toCurrency = number =>
    (number = number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }));

// Calculate a tip from number
function calculateTip(bill) {
    if (bill <= 50 || bill >= 300) {
        return bill * (20 / 100);
    } else {
        return bill * (15 / 100);
    }
}

// Generate bill from random number, and format recipient;
function generateRecipient() {
    const bill = randomNumber();

    const tip = calculateTip(bill);

    const total = bill + tip;

    return `RECIPIENT:
                If bill is ${toCurrency(bill)},
                then tip is ${toCurrency(tip)},
                and total is ${toCurrency(total)}`;
}

// For loop to create random number from 0 to 10
// return value is used as reference number for number of printed receipts.
for (
    let wantedReceipts = 0;
    wantedReceipts < Math.random() * 10;
    wantedReceipts++
) {
    console.log(generateRecipient());
}

console.log('Teacher Solution');

const calcTipT = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const billsT = [125, 555, 44];
const tipsT = [calcTip(billsT[0]), calcTip(billsT[1]), calcTip(billsT[2])];
const totalsT = [
    billsT[0] + tipsT[0],
    billsT[1] + tipsT[1],
    billsT[2] + tipsT[2],
];

console.log(billsT, tipsT, totalsT);
