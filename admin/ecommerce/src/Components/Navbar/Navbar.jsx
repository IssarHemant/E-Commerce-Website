import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.jpeg'
import arrowicon from '../../assets/arrow_icon.svg'

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <div className="left-section">
      <img src={navProfile} className="nav-profile" alt="" />
      <img src={arrowicon} className="arrow-icon" alt="" />
      </div>
    </div>
  )
}

export default Navbar
