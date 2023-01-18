import Counter from "./Counter";
import Info from "./Info";
import { useState } from "react";
import CounterRe from "./CounterRe";
import Average from "./Average";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Info />}
      {visible && <Counter />}
      {visible && <CounterRe />}
      {visible && <Average />}
    </div>
  );
};

export default App;
