import { useContext } from 'react'
import {NavLink as NavLinkReactRouter} from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'

const NavLink = ({to, children}) => {
  const {isDark} = useContext(ThemeContext)
  const textStyle = {color: isDark ? '#fff' : "#000"}
  return (
    <NavLinkReactRouter
    style={textStyle}
      className={({isActive}) => isActive ? "mx-3 isActive" : "mx-3"}
      to={to}
    >
      {children}
    </NavLinkReactRouter>
  )
}

export default NavLink