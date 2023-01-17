import { useState } from "react";

const EventPrac = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존의 form 내용을 이자리에 복사후
      [e.target.name]: e.target.value, //원하는 값을 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeydown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 쳐봐"
        value={message}
        onChange={onChange}
        onKeyDown={onKeydown}
      />
      <p>{message}</p>
      <button onClick={onClick}>확인</button>
    </div>
  );
};
export default EventPrac;
