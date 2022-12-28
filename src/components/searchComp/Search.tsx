import React from 'react'
import KitchenList from '../kitchenList/KitchenList'
import NavBar from '../navBar/NavBar'
import './Search.css'

const Search = () => {
  return (
    <>
      <div>
        <div className="serach-background">
          <div className="serach-box">
            <div className="serach-location">
              <img
                src={require('../../assets/cart_page/icn_pin.png')}
                alt=""
                className="icn_pin"
              />
            </div>
            <div className="serach-text">Downtown Burj Khalifa, Dubai..</div>
            <div className="serach-compass">
              <img
                src={require('../../assets/cart_page/icn_gps_indicator.png')}
                alt=""
                className="header-compass"
              />
            </div>
          </div>
          <div className="search-input">
            <input type="text" className="searchField" />
            <img
              src={require('../../assets/cart_page/icn_search_home copy.png')}
              alt=""
              className="icn_search"
            />
          </div>
          <div className="logo-serach">
            {' '}
            <img
              src={require('../../assets/cart_page/now_button.png')}
              alt=""
              className="now_button"
            />
          </div>
        </div>
        {/* <div className="breadcrumbs">
        <ul className="breadcrumb">
          <li>Home</li>
          <li>UAE</li>
          <li>Explore</li>
          <li>Great breakfasts</li>
          <li>The Boutique Kitchen</li>
        </ul>
      </div> */}
        <div className="KitchenListContainer">
          <KitchenList />
        </div>
      </div>
      <div className="navbarContainer">
        <NavBar />
      </div>
    </>
  )
}

export default Search
