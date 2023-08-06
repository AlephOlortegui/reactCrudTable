import {NavLink as NavLinkReactRouter} from 'react-router-dom'

const NavLink = ({to, children}) => {
  return (
    <NavLinkReactRouter
      className={({isActive}) => isActive ? "mx-3" : "mx-3 notActive"}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}

export default NavLink