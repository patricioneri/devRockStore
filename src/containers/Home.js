import React from 'react'
import { useEffect } from 'react'
import Item from '../components/Item'
import '../assets/css/Home.css'
import Contexto from '../context/Contexto'
import { useContext } from 'react'

export default function Home() {

	const {getProducts, products} = useContext(Contexto)
	
	useEffect( ()=>{ getProducts() } , [] )

	
	return (
    <div className="HomeItemsContainer">
      {products.map((e) => (
        <Item
          key={e.id}
          name={e.nombre}
          img={e.img}
          price={e.precio}
          measures={e.medidas}
          id={e.id}
        />
      ))}
    </div>
  );
}

