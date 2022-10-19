import Album from "./Album";
import { useState } from "react";
import "./main.scss";
const Button = () => {
  const [show, setShow] = useState(true);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className="mainDiv">
      <h1>ALBUMS</h1>
      <button className="button2" onClick={showHandler}>
        {show ? "HIDE" : "SHOW"}
      </button>
      {show ? <Album /> : <></>}
    </div>
  );
};

export default Button;
