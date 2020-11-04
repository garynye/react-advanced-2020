import React, { useState } from "react";

const UseStateObject = () => {

  //can use n object to hold the values
  const [person, setPerson] = useState({
    name: "gary",
    age: 44,
    message: "message here",
  });
  //can also use state values so you don't have to use the ... to copy the object items. you have to preserve old values through spread operator.
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(25);
  const [message, setMessage] = useState("message here");
  //if using objects, have to use spread operator to copy old values.
  const changeMessage = () => {
    // setPerson({...person, message: 'hello world'})
    setMessage("handler changed message.");
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>

      <button className="btn" onClick={changeMessage}>
        {" "}
        change message
      </button>
    </>
  );
};

export default UseStateObject;
