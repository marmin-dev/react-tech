import styles from "./CSSModule.module.scss";
import { useState } from "react";
import classNames from "classnames/bind";

const CSSModule = () => {
  const [color, setColor] = useState(styles.wrapper);
  const onChangeC = () => {
    if (color === styles.wrapper) {
      setColor(styles.inverted);
    } else {
      setColor(styles.wrapper);
    }
  };
  const cx = classNames.bind(styles); //미리 스타일스에서 클래스를 받아옴
  return (
    <div>
      <div className={color} onClick={onChangeC}>
        안녕하세요 저는 <span className="something">CSS Module</span>
      </div>
      <div className={cx("wrapper", "inverte")}>
        안녕하세요 저는 <span className="something">CSS Module</span>
      </div>
    </div>
  );
};
export default CSSModule;
