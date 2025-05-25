import { lazy } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const Dashboard = lazy(() => import('./Components/Dashboard'))
const Landing = lazy(() => import('./Components/Landing'))

export default function App() {   // here we can also use suspense syntax as well
  return <div>
    <BrowserRouter>
      <AppBar></AppBar>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function AppBar() {
  const navigate = useNavigate();
  return <div>
    <button onClick={() => { navigate("/") }}>Landing Page</button>
    <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>
  </div>
}

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