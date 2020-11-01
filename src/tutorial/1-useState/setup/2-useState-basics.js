import React, { useState } from "react";

const UseStateBasics = () => {
  // console.log(useState('hello'))
  // const value = useState('wofij')[0]
  // const handler = useState('feiuf')[1]
  // console.log(value,handler)
  const [apple, setApple] = useState("hello");
  const handleClick = () => {

    if (apple === 'Hello') {
      setApple("Hello World");
    } else {
      setApple("Hello");
    }


  };
  return (
    <React.Fragment>
      <h1>{apple}</h1>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
