// //#region using RECOIL a state management tool for the more optimization of application
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import './App.css'
import { countAtom, evenSelector } from './Store/Atoms/count'

export default function App() {
  return (
    <>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </>
  )
}

function Count() {
  console.log("Count component re-renders")     // now by using recoil, this component doesn't rerender
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    <h2>
      <b> {count} </b>
    </h2 >
  </div>
}

function Buttons() {    // by using the another Hook from Recoil will make this component more optimized. As in this component we only need the Set
  const setCount = useSetRecoilState(countAtom);
  // const [count, setCount] = useRecoilState(countAtom);    // by using this we have one problem that the buttons will re-render again and again where as we don't really need buttons to re-render
  return <div>
    <button onClick={() => setCount(count => count + 1)}>Increment</button>
    <button onClick={() => setCount(count => count - 1)}>Decrement</button>
    <br></br>
    <br></br>
    <CheckIfEvenOrNot></CheckIfEvenOrNot>
    {/* <button onClick={() => { setCount(count + 1) }}>Increment</button>
    <button onClick={() => { setCount(count - 1) }}>Decrement</button> */}
  </div>
}

function CheckIfEvenOrNot() {    // this is the ugly way to do this but we have one more option that is RECOIL SELECTOR
  const count = useRecoilValue(evenSelector);
  return <div>
    <b>{count ? null : "It is even"}</b>
  </div>
}
// //#endregion

// // //#region Context API :- It only resolves the problem of props drilling but by using this it automatically re-renders those components as well in which we haven't use Context API
// // // so to resolve this issue or to make our application more optimized we need to use the other state manangement tools
// // import { useContext, useState } from 'react'
// // import './App.css'
// // import { CountContext } from './Context'

// // export default function App() {
// //   const [count, setCount] = useState(0)
// //   return (
// //     <>
// //       <CountContext.Provider value={count}>
// //         <Count setCount={setCount}></Count>
// //       </CountContext.Provider>
// //     </>
// //   )
// // }

// // function Count({ setCount }) {
// //   console.log("Count component re-renders")
// //   return <div>
// //     <CountRenderer></CountRenderer>
// //     <Buttons setCount={setCount}></Buttons>
// //   </div>
// // }

// // function CountRenderer() {
// //   const count = useContext(CountContext);
// //   return <div> <h2>
// //     <b> {count} </b>
// //   </h2 >
// //   </div>
// // }

// // function Buttons({ setCount }) {
// //   const count = useContext(CountContext)
// //   return <div>
// //     <button onClick={() => { setCount(count + 1) }}>Increment</button>
// //     <button onClick={() => { setCount(count - 1) }}>Decrement</button>
// //   </div>
// // }
// // //#endregion