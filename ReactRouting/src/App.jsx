//#region CONTEXT API
import { useContext, useState } from "react";
import { CounterContext } from "../Context";

export default function App() {
  const [count, setCount] = useState(0);

  // wrap everything that wants to use the teleported value inside a provider
  return <div>
    <CounterContext.Provider value={count}>
      <Counter setCount={setCount}></Counter>
    </CounterContext.Provider>
  </div >
}

function Counter({ setCount }) {
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons setCounter={setCount}></Buttons>
  </div>
}

function CountRenderer() {
  const count = useContext(CounterContext);
  return <div>
    <h1> {count} </h1>
  </div>
}

function Buttons({ setCounter }) {
  const count = useContext(CounterContext);
  return <div>
    <button onClick={() => { setCounter(count + 1) }}>Increment</button>
    <button onClick={() => { setCounter(count - 1) }}>Decrement</button>
  </div>
}
//#endregion

//#region Props drilling :- You will need to drill props down through the component tree. This gets very hard to maintain and highly verbose makes code highly unreadable
// Ultimately, passing a props is a great way to explicitly pipe data through your UI tree to the components that use it.
// But passing props can become verbose and inconvenient when you need to pass some props deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far 
// removed from components that need data and lifting state up that high can lead to a situation called "PROP DRILLING"

// in the bolow example if we try to move button component inside the Counter component then it becomes necessary to pass the Set Count variable to Counter component which is not necessary for 
// Counter component as it is mainly uses the Count variable only. So to resolve this problem we have the concept of CONTEXT API
// import { useState } from "react"

// export default function App() {
//   const [count, setCount] = useState(0);
//   return <div>
//     <Counter count={count}></Counter>
//     <Buttons setCounter={setCount} count={count}></Buttons>
//   </div >
// }

// function Counter({ count }) {
//   return <div>
//     <h1>
//       {count}
//     </h1>
//   </div>
// }

// function Buttons({ setCounter, count }) {
//   return <div>
//     <button onClick={() => { setCounter(count + 1) }}>Increment</button>
//     <button onClick={() => { setCounter(count - 1) }}>Decrement</button>
//   </div>
// }
//#endregion

//#region Lazy loading
// import { lazy } from 'react'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

// const Dashboard = lazy(() => import('./Components/Dashboard'))
// const Landing = lazy(() => import('./Components/Landing'))

// export default function App() {   // here we can also use suspense syntax as well
//   return <div>
//     <BrowserRouter>
//       <AppBar></AppBar>
//       <Routes>
//         <Route path='/' element={<Landing></Landing>}></Route>
//         <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
//       </Routes>
//     </BrowserRouter>
//   </div>
// }

// function AppBar() {
//   const navigate = useNavigate();
//   return <div>
//     <button onClick={() => { navigate("/") }}>Landing Page</button>
//     <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>
//   </div>
// }
//#endregion

//#region  Without Lazy Loading
// import './App.css'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import Dashboard from './Components/Dashboard'
// import Landing from './Components/Landing'

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <AppBar></AppBar>
//         <Routes>
//           <Route path='/' element={<Landing></Landing>}></Route>
//           <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
//           <Route></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

// function AppBar() {
//   const navigate = useNavigate();
//   return <div>
//     {/* <button onClick={() => { window.location.href = "/" }}>Landing</button>          // here is the first way to do the routing but using this will re-render the page so application doesn't act like SPA
//         <button onClick={() => { window.location.href = '/dashboard' }}>Dashboard</button> */}
//     <button onClick={() => { navigate("/") }}> Landing Page </button>
//     <button onClick={() => { navigate("/dashboard") }}> Dashboard </button>
//   </div>
// }

//#endregion