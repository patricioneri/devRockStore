import Contexto from "./Contexto";
import axios from 'axios'
import { useReducer } from "react";
import Reducer from "./Reducer";
import React from 'react'


export default function UseContext({children}) {
  const initialState = {
		products: [],
		cart: [],
		price: 0
	}
	
const [state, dispatch] = useReducer(Reducer, initialState)
	
	const getProducts = async () => {
			let url = 'https://devrockstore-default-rtdb.firebaseio.com/productos.json'
			const res = await axios.get(url)
			dispatch({type: 'GET_PRODUCTS', payload: res.data })
	}

	const addToCart = (id) => {
		dispatch({type: 'ADD_TO_CART', payload: id})
		
	}

	const cleanCart = (id) => {
		dispatch({type: 'CLEAN_CART', payload:id})
	}


  return (
    <Contexto.Provider value={{
			products: state.products,
			cart: state.cart,
			price: state.price,
			getProducts,
			addToCart,
			cleanCart
		}}
		>
			{children}
		</Contexto.Provider>
  )
}
