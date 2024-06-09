import React from 'react'
import { Link } from 'react-router-dom'
type props = {
  to: string;
  bg: string;
  text: string;
  textColor: string;
  onClick?: () => Promise<void>
 }
const Navigation: React.FC<props> = ({to, bg, text, textColor}) => {
  return (
      <Link className='navlink' to={to} style={{background: bg, color: textColor}}>{text}</Link>
  )
}

export default Navigation
