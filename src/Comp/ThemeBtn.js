import { useContext } from "react"
import { ThemeContext } from "../context/ThemeProvider"

const ThemeBtn = () => {
  const {toggleTheme, isDark} = useContext(ThemeContext)
  let style = isDark ? "btn-light" : "btn-dark";
  let icon = isDark ? <i className="bi bi-brightness-high-fill"></i> : <i className="bi bi-moon-fill"></i>;
  return (
    <div className='py-4'>
      <button className={`btn ${style}`} onClick={() => toggleTheme()}>
        {icon}
      </button>
    </div>
  )
}

export default ThemeBtn