import React from 'react'
import '../assets/css/CartItem.css'
import { useContext } from 'react';
import Contexto from '../context/Contexto';

export default function CartItem(props) {
  const {cleanCart} = useContext(Contexto)
  const { nombre, precio, descripcion, img, id } = props;
  return (
    <div className='cartItemContainer'>
      <div className="cartItemImgContainer">
      <h3 className="cartItemName">{nombre}</h3>
        <img className="cartItemImg" src={img} alt="" />
      </div>
        <p className='cartItemDescription'>{descripcion}</p>
        <div className='cartItemPriceButtonContainer'>
          <p className="cartItemPrice">${precio}</p>
          <button className='cartItemBtn' onClick={()=> cleanCart(id)}>Quitar</button>
        </div>
    </div>
    
  );
}
