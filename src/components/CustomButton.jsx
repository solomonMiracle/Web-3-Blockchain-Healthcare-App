import React from 'react'
import './Navbar.css';

const CustomButton = ({ btnType, title, handleClick, styles }) => {
  return (
    <button
      type={btnType}
      className={`custm`}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton