var numbers = [1, 2, 3, 4, 5];
var processed = numbers.map(function (num) {
  return num * num;
});
console.log(processed);

const numbers2 = [1, 2, 3, 4, 5];
const result = numbers.map((num) => num * num);
console.log(result);
