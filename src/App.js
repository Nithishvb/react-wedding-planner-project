import React from 'react'
import "./App.css";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import SideBar from './Components/SideBar'
import Todo from './Components/Todo'
import Planner from './Components/Planner'

function App() {
  return (
    <div className='app'>
      <Router>
        <div>
          <SideBar />
        </div>
        <div className='app__main' >
          <Routes>
            <Route exact path='/todo' element={<Todo />} />
            <Route exact path='/planner' element={<Planner />} />
        </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App

