// import { Link } from "react-router-dom"
import NavLink from "../Custom/NavLink"
import Title from "../Custom/Title"
import ThemeBtn from "./ThemeBtn"

const Header = () => {
  return (
    <header className='d-flex justify-content-around align-items-center'>
      <Title level="h3" className="mb-0">Crud Operations</Title>
      <nav className="ms-auto me-4">
       {/*  <Link className='mx-3' to="/">Home</Link>
        <Link className='mx-3' to="/create">Create</Link> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
      </nav>
      <ThemeBtn />
    </header>
  )
}

export default Header