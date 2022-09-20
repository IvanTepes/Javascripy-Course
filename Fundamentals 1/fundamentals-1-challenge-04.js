console.log('');
// ! FUNDAMENTALS-1 CHALLENGE 4

console.log('');
console.log('FUNDAMENTALS-1 CHALLENGE 4');

console.log(`    
Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 😉
GOOD LUCK 😀
`);

const bill = 40;

const tip =
    bill >= 50 && bill <= 300
        ? `The bill was ${bill}, The tip was ${
              bill * (15 / 100)
          } and total was ${bill + bill * (15 / 100)}`
        : `The bill was ${bill}, The tip was ${
              bill * (20 / 100)
          } and total was ${bill + bill * (20 / 100)}`;
console.log(tip);

console.log('My Solution 2');

let tip2;

if (bill <= 50 || bill >= 300) {
    tip2 = bill * (20 / 100);
} else {
    tip2 = bill * (15 / 100);
}

const total = bill + tip2;

const recipient = `BILL EXPLANATION

Calculation for tip:
Spending below 50$ and more than 300$ tip is calculated by 20%,

Everything else is calculated by 15%.

Total you paying (Your spending + tip) ${bill}$ + ${
    bill <= 50 || bill >= 300 ? '20%' : '15%'
}

Your Spending: ==> ${bill}$
Bill tip: (${bill}$ + ${
    bill <= 50 || bill >= 300 ? '20%' : '15%'
}): ==>  ${tip2}$

Bill total: (${bill}$ + ${tip2}$): ===>  ${total}$`;

console.log(recipient);

console.log('Teacher Solution');
const bill2 = 430;
const tip3 = bill2 <= 300 && bill2 >= 50 ? bill2 * 0.15 : bill2 * 0.2;
console.log(
    `The bill was ${bill2}, the tip was ${tip3}, and the total value ${
        bill2 + tip3
    }`
);
