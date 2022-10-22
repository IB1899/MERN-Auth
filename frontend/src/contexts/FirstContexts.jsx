import React, { createContext } from 'react';
import { useState } from 'react';

/**
  *! Context. is creating a public states and provide it to what ever component 
  *! that needs that state. Inside the component we can change its state ,
  *! and that component will get re-rendered. 
*/

//! Create the Context
export let FirstContext = createContext();


//! Functional component that provide the states
let FirstContextProvider = (props) => {

  let [name, setName] = useState("ibrahim");
  let [age, setAge] = useState(17);


  let increaseAge = () => {
    setAge(age + 1)
  }
  let reduceAge = () => {
    setAge(age - 1)
  }

  return (
    <FirstContext.Provider value={{ name, setName, age, increaseAge, reduceAge }}>
      {props.children}

    </FirstContext.Provider>
  )
}
export default FirstContextProvider;



