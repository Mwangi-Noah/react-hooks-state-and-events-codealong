
import React, { useState } from "react";

function Toggle() {
  //call useState and provide an initial value//
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    setIsOn((isOn) => !isOn);
  }
  const color = isOn ? "red" : "white";
  return (
    <button style={{ background: color }} onClick={handleClick}>
      {isOn ? "ON" : "OFF"}
    </button>
  ); 
  
}

export default Toggle;
