import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className='d-flex justify-content-around align-items-center'>
      <h3>Crud Operations</h3>
      <nav>
        <Link className='mx-3' to="/">Home</Link>
        <Link className='mx-3' to="/">Create</Link>
      </nav>
    </header>
  )
}

export default Header