import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'

let counter=10;

function App() {
  
  let [counter,setCount]=useState(10)

  let addOne = () =>{
    counter=counter+1;
    console.log(counter)
    setCount(counter);
  }


  return (
    <>
      <h1>This is my React App  {counter}</h1>
      <h1>Counter:  {counter}</h1>
      <button  onClick={addOne}>Add  {counter}</button>
      <button>Dec  {counter}</button>
    </>
  )
}

export default App
