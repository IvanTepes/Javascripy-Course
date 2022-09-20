console.log('');
// ! FUNDAMENTALS-1 CHALLENGE 3

console.log('');
console.log('FUNDAMENTALS-1 CHALLENGE 3');

console.log(`    
    There are two gymnastics teams, Dolphins and Koalas. They compete against each
    other 3 times. The winner with the highest average score wins a trophy!

    Your tasks:
    1. Calculate the average score for each team, using the test data below

    2. Compare the team's average scores to determine the winner of the competition,
    and print it to the console. Don't forget that there can be a draw, so test for that
    as well (draw means they have the same average score)

    3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
    team only wins if it has a higher score than the other team, and the same time a
    score of at least 100 points. Hint: Use a logical operator to test for minimum
    score, as well as multiple else-if blocks 😉

    4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
    both teams have the same score and both have a score greater or equal 100
    points. Otherwise, no team wins the trophy

    Test data:
    § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
    § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
    § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
`);
console.log();

// Teams
const teamOne = 'Dolphins';
const teamTwo = 'Koalas';

// Scores
// Minimum score
const minScore = 100;

// DATA 1

// Team one
const firstScoreTeamOne = 96;
const secondScoreTeamOne = 108;
const thirdScoreTeamOne = 89;

// Team two
const firstScoreTeamTwo = 88;
const secondScoreTeamTwo = 91;
const thirdScoreTeamTwo = 110;

// BONUS 1

// Team one
const firstScoreTeamOneBonus1 = 97;
const secondScoreTeamOneBonus1 = 112;
const thirdScoreTeamOneBonus1 = 101;

// Team two
const firstScoreTeamTwoBonus1 = 109;
const secondScoreTeamTwoBonus1 = 95;
const thirdScoreTeamTwoBonus1 = 123;

// BONUS 2

// Team one
const firstScoreTeamOneBonus2 = 97;
const secondScoreTeamOneBonus2 = 112;
const thirdScoreTeamOneBonus2 = 101;

// Team two
const firstScoreTeamTwoBonus2 = 109;
const secondScoreTeamTwoBonus2 = 95;
const thirdScoreTeamTwoBonus2 = 106;

// DATA 1

// Average score

// Team one
const averageTeamOne =
    (firstScoreTeamOne + secondScoreTeamOne + thirdScoreTeamOne) / 3;

// Team two
const averageTeamTwo =
    (firstScoreTeamTwo + secondScoreTeamTwo + thirdScoreTeamTwo) / 3;

// BONUS 1

// Average score

// Team one
const averageTeamOneBonus1 =
    (firstScoreTeamOneBonus1 +
        secondScoreTeamOneBonus1 +
        thirdScoreTeamOneBonus1) /
    3;

// Team two
const averageTeamTwoBonus1 =
    (firstScoreTeamTwoBonus1 +
        secondScoreTeamTwoBonus1 +
        thirdScoreTeamTwoBonus1) /
    3;

// BONUS 2

// Average score

// Team one
const averageTeamOneBonus2 =
    (firstScoreTeamOneBonus2 +
        secondScoreTeamOneBonus2 +
        thirdScoreTeamOneBonus2) /
    3;

// Team two
const averageTeamTwoBonus2 =
    (firstScoreTeamTwoBonus2 +
        secondScoreTeamTwoBonus2 +
        thirdScoreTeamTwoBonus2) /
    3;

// ! DATA 1 / WITHOUT MIN SCORE REQUIREMENTS

console.log('');
console.log('DATA 1 / WITHOUT MIN SCORE REQUIREMENTS');

if (averageTeamOne > averageTeamTwo) {
    console.log(`
    ${teamOne.toUpperCase()} is WINNER with score of ${averageTeamOne.toPrecision(
        4
    )} VS
    ${teamTwo} score ${averageTeamTwo.toPrecision(4)}`);
} else if (averageTeamTwo > averageTeamOne) {
    console.log(`${teamTwo.toUpperCase()} is WINNER with score of ${averageTeamTwo.toPrecision(
        4
    )} VS
    ${teamOne} score ${averageTeamOne.toPrecision(4)}`);
} else if (averageTeamOne === averageTeamTwo) {
    console.log(`DRAW!
    ${teamOne} and ${teamTwo} have same score,
    ${averageTeamOne.toPrecision(4)} / ${averageTeamTwo.toPrecision(4)}`);
}

// ! BONUS 1 / WITH MIN SCORE REQUIREMENTS
console.log('');
console.log('BONUS 1 / WITH MIN SCORE REQUIREMENTS');

if (
    averageTeamOneBonus1 >= minScore &&
    averageTeamOneBonus1 > averageTeamTwoBonus1
) {
    console.log(`${teamOne.toUpperCase()} is WINNER with score of ${averageTeamOneBonus1.toPrecision(
        4
    )} VS
        ${teamTwo} score ${averageTeamTwoBonus1.toPrecision(4)}`);
} else if (
    averageTeamTwoBonus1 >= minScore &&
    averageTeamTwoBonus1 > averageTeamOneBonus1
) {
    console.log(`${teamTwo.toUpperCase()} is WINNER with score of ${averageTeamTwoBonus1.toPrecision(
        4
    )} VS
    ${teamOne} score ${averageTeamOneBonus1.toPrecision(4)}`);
} else if (
    averageTeamOneBonus1 >= minScore &&
    averageTeamTwoBonus1 >= minScore &&
    averageTeamOneBonus1 === averageTeamTwoBonus1
) {
    console.log(`DRAW!
        ${teamOne} and ${teamTwo} have same score,
        ${averageTeamOneBonus1.toPrecision(
            4
        )} / ${averageTeamTwoBonus1.toPrecision(4)}`);
} else {
    console.log(`NO WINNERS!
        ${teamOne} and ${teamTwo} didn't reach minimum score (${minScore}) `);
}

// ! BONUS 2 / WITH MIN SCORE REQUIREMENTS
console.log('');
console.log('BONUS 2 / WITH MIN SCORE REQUIREMENTS');

if (
    averageTeamOneBonus2 >= minScore &&
    averageTeamOneBonus2 > averageTeamTwoBonus2
) {
    console.log(`${teamOne.toUpperCase()} is WINNER with score of ${averageTeamOneBonus2.toPrecision(
        4
    )} VS
    
    ${teamTwo} score ${averageTeamTwoBonus2.toPrecision(4)}`);
} else if (
    averageTeamTwoBonus2 >= minScore &&
    averageTeamTwoBonus2 > averageTeamOneBonus2
) {
    console.log(`${teamTwo.toUpperCase()} is WINNER  with score of ${averageTeamTwoBonus2.toPrecision(
        4
    )} VS
        ${teamOne} score ${averageTeamOneBonus2.toPrecision(4)}`);
} else if (
    averageTeamOneBonus2 >= minScore &&
    averageTeamTwoBonus2 >= minScore &&
    averageTeamOneBonus2 === averageTeamTwoBonus2
) {
    console.log(`DRAW!
        ${teamOne} and ${teamTwo} have same score,
        ${averageTeamOneBonus2.toPrecision(
            4
        )} / ${averageTeamTwoBonus2.toPrecision(4)}`);
} else {
    console.log(`NO WINNERS!
        ${teamOne} and ${teamTwo} didn't reach minimum score (${minScore}) `);
}

// SOLUTION

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 50) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//   console.log('Both win the trophy!');
// } else {
//   console.log('No one wins the trophy 😭');
// }
