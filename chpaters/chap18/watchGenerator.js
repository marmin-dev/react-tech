function* watchGenerator() {
  console.log("모니터링 중");
  let prevAction = null;
  while (true) {
    const action = yield;
    console.log("이전 액션", prevAction);
    prevAction = action;
    if (action.type === "HELLO") {
      console.log("안녕하세요!");
    }
  }
}
const watch = watchGenerator();
console.log(watch.next());
console.log("-------------------------");
console.log(watch.next({ type: "TEST" }));
console.log("-------------------------");
console.log(watch.next({ type: "HELLO" }));
