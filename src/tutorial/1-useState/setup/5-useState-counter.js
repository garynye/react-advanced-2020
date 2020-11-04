import { wait } from "@testing-library/react";
import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);

  const increaseFunction = () => {
    setValue(value - 1);
  };
  const increaseComplexFunction = () => {
    setTimeout(() => {
      setValue2((prevState) => {
        return prevState + 1;
      });

      //async, so value is always what it is if you click mutiple times.
      //setValue2(value2 + 1)
    }, 2000);
  };
  const resetFunction = () => {
    setValue(0);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular UseStateCounter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={increaseFunction}>
          decrease
        </button>
        <button className="btn" onClick={resetFunction}>
          reset
        </button>
        <button
          className="btn"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          increase
        </button>
      </section>
      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value2}</h1>
        <button className="btn" onClick={increaseComplexFunction}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
