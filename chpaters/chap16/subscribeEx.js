const listner = () => {
  console.log("상태가 업데이트 됨");
};
const unsubscribe = store.subscribe(listner);
unsubscribe();
// 추후 구독을 비활성화 할 때 함수를 호출
