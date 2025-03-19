// import { useState } from 'react'
import React from 'react'
import Header from './components/Header/Header'
import Body from './components/Header/Body/Body'

import './App.css'


function App() {

  // let [counter, setcounter] = useState(5)
  // // let counter = 5 

  // const addvalue = () => {
  //   // counter = counter + 1
  //   setcounter(counter+1)
  //   console.log("value-add", counter)

  // }
  // const removevalue = () => {
  //   // counter = counter - 1
  //   setcounter(counter-1)
  //   console.log("remove-value", counter)
  // }
  return (
    <>
      {/* <h1>1 day</h1>
      <h2>working and count value :: {counter} </h2>

      <button onClick={addvalue}>
        add value{counter} </button>
      <br />
      <button onClick={removevalue}>
        remove value{counter}</button>
        <header /> */}
      
        <Header/>
        <Body/>
    </>
  
  );
}

export default App 
