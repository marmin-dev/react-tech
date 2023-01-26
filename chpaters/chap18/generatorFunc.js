function weirdFunction() {
  return 1;
  return 2;
  return 3;
}
function* generatorFunc() {
  console.log("안녕하세요");
  yield 1;
  console.log("generator함수");
  yield 2;
  console.log("함수");
  yield 3;
  return 4;
}
const generator = generatorFunc();
generator.next();
console.log(generator);
setTimeout(() => {
  generator.next();
  console.log(generator);
}, 1000);
setTimeout(() => {
  generator.next();
  console.log(generator);
}, 1000);
