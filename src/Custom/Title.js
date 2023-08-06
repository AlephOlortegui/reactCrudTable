import { useContext } from 'react'
import {ThemeContext} from '../context/ThemeProvider'

const Title = ({level = 'h1', children, ...props}) => {
  //...props from className from Table.js and Form.js
  const {isDark} = useContext(ThemeContext)
  let textStyle = {color: isDark ? "#e7e3e3" : "#000"}
  const validLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const Tag = validLevels.includes(level) ? level : 'h1';
  return (
    <Tag {...props} style={textStyle}>{children}</Tag>
  )
}

export default Title