import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  //you can import, or use the react function and the use state.  if you just use once, don't bother importing usestate  
  const [people, setPeople] = React.useState([])
  return <h2>useState array example</h2>;
};

export default UseStateArray;
