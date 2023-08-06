import React from 'react'

const Header = () => {
  return (
    <header className='d-flex justify-content-around align-items-center'>
      <h3>Crud Operations</h3>
      <nav>
        <a className='mx-3' href="/">Home</a>
        <a className='mx-3' href="/">Create</a>
      </nav>
    </header>
  )
}

export default Header