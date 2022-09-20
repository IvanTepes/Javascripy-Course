'use strict';
console.log('');
// ! FUNDAMENTALS-2 CHALLENGE 1

console.log('');
console.log('FUNDAMENTALS-2 CHALLENGE 1');
console.log(`
    1. Create an arrow function 'calcAverage' to calculate the average of 3 scores

    2. Use the function to calculate the average for both teams

    3. Create a function 'checkWinner' that takes the average score of each team
    as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner
    to the console, together with the victory points, according to the rule above.
    Example: "Koalas win (30 vs. 13)"

    4. Use the 'checkWinner' function to determine the winner for both Data 1 and
    Data 2

    5. Ignore draws this time

    Test data:
    § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
    § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

    Hints:
    § To calculate average of 3 values, add them all together and divide by 3
    § To check if number A is at least double number B, check for A >= 2 * B.
    Apply this to the team's average scores`);

console.log('');
console.log('---------------------------------');
console.log('');

// const calcAverage = (score1, score2, score3) => {
//     return (score1 + score2 + score3) / 3;
// }

// console.log(`Average of three score is ${calcAverage(44,34,56)}`);

//  2.
//  const avgDolphins = calcAverage(44,23,71);
//  const avgKoalas = calcAverage(65,54,49);
// const avgDolphins = calcAverage(85,54,41);
// const avgKoalas = calcAverage(23,34,27);

// console.log(avgDolphins, avgKoalas);

// 3.
// function checkWinner(average1, average2) {

//     if (average1 > average2) {
//         console.log(`Dolphins win (${average1} vs ${average2})`)
//     } else {
//         console.log(`Koalas win (${average2} vs ${average1})`)
//     }

// }

// checkWinner(avgDolphins,avgKoalas);

// console.log(avgDolphins >= ( 2 * avgKoalas));

console.log('Solution 2');

//Team List
const teamList = ['Dolphins', 'Koalas'];

// Team names / 2 team is playing
const team1 = teamList[0];
const team2 = teamList[1];

// Team 1 Score
const team1Score1 = Math.random() * 200; // 44 // 85
const team1Score2 = Math.random() * 200; // 23 // 54
const team1Score3 = Math.random() * 200; // 71 // 41

// Team 2 Score
const team2Score1 = Math.random() * 200; // 65 // 23
const team2Score2 = Math.random() * 200; // 54 // 34
const team2Score3 = Math.random() * 200; // 49 // 27

// Average score by teams
const averageTeam1 = calcAverage(
    team1Score1,
    team1Score2,
    team1Score3
).toPrecision(4);
const averageTeam2 = calcAverage(
    team2Score1,
    team2Score2,
    team2Score3
).toPrecision(4);

// Check who the winner is
function checkWinner(averageTeam1, averageTeam2) {
    if (averageTeam1 >= 2 * averageTeam2) {
        console.log(` ${team1} win (${averageTeam1} vs ${averageTeam2}) `);
    } else if (averageTeam2 >= 2 * averageTeam1) {
        console.log(` ${team2} win (${averageTeam2} vs ${averageTeam1}) `);
    } else {
        console.log(`No team has twice as many points as the other
        (${averageTeam1} vs ${averageTeam2})`);
    }
}

// Winner
checkWinner(averageTeam1, averageTeam2);

// Double score 2
console.log(averageTeam1 >= 2 * averageTeam2);

const checkIfDouble = function (averageTeam1, averageTeam2) {
    const isDoubleTeam1 = averageTeam1 >= 2 * averageTeam2;
    const isDoubleTeam2 = averageTeam2 >= 2 * averageTeam1;

    if (isDoubleTeam1 === true) {
        console.log(
            `${team1} (${averageTeam1}) has twice as many points as ${team2} (${averageTeam2})`
        );
    } else if (isDoubleTeam2 === true) {
        console.log(
            `${team2} (${averageTeam2}) has twice as many points as ${team1} (${averageTeam1})`
        );
    } else {
        console.log(`No team has twice as many points as the other
        (${averageTeam1} vs ${averageTeam2})`);
    }
};

// checkIfDouble(averageTeam1, averageTeam2);
