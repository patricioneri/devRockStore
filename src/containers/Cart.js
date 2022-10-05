import React from 'react'
import CartItem from '../components/CartItem'
import { useContext } from 'react'
import Contexto from '../context/Contexto'
import '../assets/css/Cart.css'

export default function Cart() {
  const {cart, price} = useContext(Contexto)
  return (
    <div className='cartContainer'>
      {cart.map((item, i) =>  <CartItem key={i} {...item}></CartItem>)}
      {console.log(price)}
    </div>
  )
}
