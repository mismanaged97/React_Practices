import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Landing from './Components/Landing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing></Landing>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App