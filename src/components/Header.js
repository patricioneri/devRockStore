import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/css/Header.css'
import cart from "../assets/statics/cart.png"
import back from "../assets/statics/back.png"

export default function Header() {

  return (
    <div className='headerContainer'>
      <Link to='/devRockStore'><img className='backImg' src={back} alt="" /></Link>
			Dev Rock Store
      <Link to='/cart'><img className='cartImg' src={cart} alt="" /></Link>
    </div>
    
  )
}
