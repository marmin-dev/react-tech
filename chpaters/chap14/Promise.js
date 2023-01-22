function increase(number) {
  const promise = new Promise((resolve, reject) => {
    //resolve 성공, reject는 실패
    setTimeout(() => {
      const result = number + 10;
      if (result > 50) {
        //50 보다 높으면 에러 발생시키기
        const e = new Error("NumberTooBig");
        return reject(e);
      }
      resolve(result); //number 값에 +10후 성공처리
    }, 1000);
  });
  return promise;
}

increase(0)
  .then((number) => {
    //Promise 에서 resolve 된 값은 .then 을 통해 받아올수 있다
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    //또 then으로 처리 가능
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .then((number) => {
    console.log(number);
    return increase(number);
  })
  .catch((e) => {
    //도중에 에러가 발생한다면 .catch를 통해 알 수 있다
    console.log(e);
  });
