import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  //you can import, or use the react function and the use state.  if you just use once, don't bother importing usestate
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((rowitem) => rowitem.id !== id)
    setPeople(newPeople)
    return 
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
