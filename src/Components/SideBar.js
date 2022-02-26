import { Link } from 'react-router-dom'
import './SideBar.css'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__container' >
        <Link to='/todo' >
        <h2>Todo List</h2>
        </Link>
        <Link to='/planner' >
          <h2>planner</h2>
        </Link>
      </div>
    </div>
  )
}

export default SideBar