import React from 'react'
import '../assets/css/Item.css'
import Contexto from '../context/Contexto'
import { useContext } from 'react'

export default function Item({ name, price, measures, img, id }) {

	const {addToCart} = useContext(Contexto)

  return (
    <div className='itemContainer'>
			<div className="itemImgContainer">
				<img className='itemImg' src={img} alt="" />
			</div>
			<h3 className='itemName'>{name}</h3>
			<div className="itemInfoContainer">
				<p className='itemMeasures'>{measures}cm</p>
				<p className='itemPrice'>${price}</p>
			</div>
			<div className="itemBtnContainer">
				<button onClick={()=> addToCart(id)} className='itemBtn'>+</button>
			</div>
		</div>
  )
}


