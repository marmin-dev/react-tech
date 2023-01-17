const numbers = [1, 2, 3, 4, 5, 6];
const biggerThanThree = numbers.filter((number) => number > 3);
console.log(biggerThanThree); //[ 4, 5, 6 ]
const withoutThree = numbers.filter((number) => number !== 3);
console.log(withoutThree); //[ 1, 2, 4, 5, 6 ]
