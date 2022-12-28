import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="header-title">LOREM</div>
      <div className="header-rightSide">
        <div className="right-header">
          <div className="header-dropDown">
            <select name="languages" className="language">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Kannada">Kannada</option>
            </select>
          </div>
          <div className="header-profile">
            <div className="header-img">
              <img
                src={require('../../assets/profile.png')}
                alt=""
                className="header-profile"
              />
            </div>
            <div className="heade-name">Ashley</div>
          </div>
        </div>
        <div className="logout">LOGOUT</div>
        <div className="logout-cart">CART</div>
      </div>
    </div>
  )
}

export default Header
