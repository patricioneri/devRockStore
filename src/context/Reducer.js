const GET_PRODUCTS = 'GET_PRODUCTS'
const ADD_TO_CART = 'ADD_TO_CART'
const CLEAN_CART = 'CLEAN_CART'


export default function Reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, products: payload };

    case ADD_TO_CART:
      
      return {
        ...state,
        cart: [
          ...state.cart,
          ...state.products.filter((e) => e.id === parseInt(payload)),
        ],
        price: state.cart.map(e => state.price = state.price + parseInt(e.precio))
      };
    case CLEAN_CART:
      return {
        ...state,
        cart: [...state.cart.filter((e) => e.id !== parseInt(payload))],
      };
  }
}


