import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import "./navbar.css"
const Nav = () => {
  return (
    <div className='navbar'>
        <h3>Shopping Cart</h3>
        <div className='links'>
            <Link to='/shop'>Shop</Link>
            <Link to='/cart'>
                <ShoppingCart size={32}/>
            </Link>
        </div>
    </div>
  )
}

export default Nav