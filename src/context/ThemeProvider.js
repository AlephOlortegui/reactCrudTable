import {createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
  const [isDark,setIsDark] = useState(false)
  const toggleTheme = () => { setIsDark(prevVal => !prevVal) }

  useEffect(()=>{
    if(isDark){
      document.querySelector('.bg-theme').classList.add('dark')
    }else{
      document.querySelector('.bg-theme').classList.remove('dark')
    }
  },[isDark])

  return (
    <ThemeContext.Provider value={{isDark, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
