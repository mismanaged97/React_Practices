//#region Context API :- It only resolves the problem of props drilling but by using this it automatically re-renders those components as well in which we haven't use Context API
import { useContext, useState } from 'react'
import './App.css'
import { CountContext } from './Context'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CountContext.Provider value={count}>
        <Count setCount={setCount}></Count>
      </CountContext.Provider>
    </>
  )
}

function Count({ setCount }) {
  console.log("Count component re-renders")
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons setCount={setCount}></Buttons>
  </div>
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div> <h2>
    <b> {count} </b>
  </h2 >
  </div>
}

function Buttons({ setCount }) {
  const count = useContext(CountContext)
  return <div>
    <button onClick={() => { setCount(count + 1) }}>Increment</button>
    <button onClick={() => { setCount(count - 1) }}>Decrement</button>
  </div>
}
//#endregion