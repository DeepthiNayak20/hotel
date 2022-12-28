import React from 'react'
import './KitchenList.css'

const KitchenList = () => {
  return (
    <div className="background">
      <div className="background-inside">
        <div className="leftBanner">
          <div className="forkImg">
            <img
              src={require('../../assets/cart_page/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle (1).png')}
              alt=""
              className="imgForkSpoon"
            />
          </div>
          <div className="kitchenName">The Boutique Kitchen</div>
          <div className="kitchenPlace">Indian, Pakistani, Kebab</div>
          <div className="ratings">
            <div className="rate-green">4.3</div>
            <div className="minutes">63 mins</div>
            <div className="order">AED30 min order</div>
            <div className="timeImg">
              <img
                src={require('../../assets/cart_page/time_icon.png')}
                alt=""
                className="imgTime"
              />
            </div>
            <div className="timings">11:00 AM - 10:00 PM</div>
          </div>
          <div className="dailyRatings">Delivery rating for last 5 orders</div>
          <div className="ratingsImages">
            <div>
              {' '}
              <img
                src={require('../../assets/cart_page/Rating 2.png')}
                alt=""
                className="imgForkSpoon"
              />
            </div>
            <div>
              {' '}
              <img
                src={require('../../assets/cart_page/Rating 2.png')}
                alt=""
                className="imgForkSpoon"
              />
            </div>
            <div>
              {' '}
              <img
                src={require('../../assets/cart_page/Rating 3.png')}
                alt=""
                className="imgForkSpoon"
              />
            </div>
            <div>
              {' '}
              <img
                src={require('../../assets/cart_page/Rating 2.png')}
                alt=""
                className="imgForkSpoon"
              />
            </div>
            <div>
              {' '}
              <img
                src={require('../../assets/cart_page/Rating 5.png')}
                alt=""
                className="imgForkSpoon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default KitchenList
