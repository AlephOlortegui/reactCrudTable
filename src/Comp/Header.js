// import { Link } from "react-router-dom"
import NavLink from "../Custom/NavLink"

const Header = () => {
  return (
    <header className='d-flex justify-content-around align-items-center'>
      <h3>Crud Operations</h3>
      <nav>
       {/*  <Link className='mx-3' to="/">Home</Link>
        <Link className='mx-3' to="/create">Create</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
      </nav>
    </header>
  )
}

export default Header