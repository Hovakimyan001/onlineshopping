import React, { useContext, useState } from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { FaShoppingBag } from 'react-icons/fa';
import { Context } from '../Context';
import { menu } from './menu';
import { NavLink } from 'react-router-dom';
export default function Header() {
  const $ = useContext(Context);
  const [openBurger, setOpenBurger] = useState(false);
  const [openShop, setOpenShop] = useState(false);
  return (
    <header>
      <h1>Michelia's Shop</h1>
      <div className="burger-menu" onClick={() => {
        setOpenBurger(!openBurger);
      }}>
        <div className="line" style={{ transform: openBurger ? 'rotate(-45deg)' : 'rotate(0deg)' }}></div>
        <div className="line" style={{ width: openBurger ? '0' : '100%' }}></div>
        <div className="line" style={{ transform: openBurger ? 'rotate(45deg)' : 'rotate(0deg)' }}></div>
      </div>
      <ul className='menu' style={{ right: openBurger ? '0' : '-250px' }}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink><MdOutlineKeyboardArrowLeft className='arrow' style={{ transform: openShop ? 'scale(-1,1)' : 'scale(1)', fontSize: '25px', cursor: 'pointer' }} onClick={() => {
          setOpenShop(!openShop);
        }} />
          <div className="shop-dropdown" style={{ clipPath : openShop ? 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}>
            <li onClick={(e) => {
              e.preventDefault();
              $.setList(menu);
            }
            }><a href="#prod" >All</a></li>
            <li onClick={(e) => $.filterCategories('Shoes', e)}><a href="#prod">Shoes</a></li>
            <li onClick={(e) => $.filterCategories('Cap', e)}><a href="#prod">Cap</a></li>
            <li onClick={(e) => $.filterCategories('Shirt', e)}><a href="#prod">Shirt</a></li>
            <li onClick={(e) => $.filterCategories('Jewelry', e)}><a href="#prod">Jewelry</a></li>
            <li onClick={(e) => $.filterCategories('Bags', e)}><a href="#prod">Bags</a></li>
            <li onClick={(e) => $.filterCategories('Glasses', e)}><a href="#prod">Glasses</a></li>
            <li onClick={(e) => $.filterCategories('Electronics', e)}><a href="#prod">Electronics</a></li>
            <li onClick={(e) => $.filterCategories('Watches', e)}><a href="#prod">Watches</a></li>
            <li onClick={(e) => $.filterCategories('Beauty', e)}><a href="#prod">Beauty</a></li>
            <li onClick={(e) => $.filterCategories('Toys', e)}><a href="#prod">Toys</a></li>
          </div>
        </li>
        <li><NavLink to="/sales">Sales & Offers</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/support">Support</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <div className="shop-icon" onClick={() => $.setOpenCart(true)}>
          <button><FaShoppingBag /></button>
          <span>Cart ({$.carts.length})</span>
        </div>
      </ul>
    </header>
  )
}
