import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5);

  const addOne=()=>{
    // console.log("valude added",Math.random());
    counter++;
    if(counter>20){
      counter=20;
    }
   setCounter(counter);
  }
  const subOne=()=>{
    counter--;
    if(counter<0){
      counter=0;
    }
    setCounter(counter);
  }


  return (
    <>
    <h1>chai and react</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addOne}>add value</button>
    <br/>
    <button onClick={subOne}>remove value</button>
    </>
  )

  
}

export default App
