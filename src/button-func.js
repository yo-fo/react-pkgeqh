import React from "react";
import "./style.css";

export function ButtonFunc() {
  const [count, setCount] = useState(0);

  const handleOnClick = () {
    setCount(count + 1 );
  }

  return <button onClick = {handleOnClick}>Clicked {count} </button>
}