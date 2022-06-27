import { TYPES } from "../action/shoppingAction";

export const shoppingInitialState = {
    products: [
        {   id: 1,
            name: "Tomates libra a:",
            price: 2000,
            image:
              "https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg",
            tagNumber: 1,
          },
          {
            id: 2,
            name: "Naranjas libra",
            price: 3180,
            image:
              "https://cdn.pixabay.com/photo/2016/10/07/14/11/tangerines-1721633_960_720.jpg",
            tagNumber: 2,
          },
        
          { 
            id: 3,
            name: "Arándano rojo Libra",
            price: 24000,
            image:
              "https://cdn.pixabay.com/photo/2016/04/13/07/18/blueberries-1326154_960_720.jpg",
            tagNumber: 3,
          },
          {
            id: 4,
            name: "Fresas Libra",
            price: 7990,
            image:
              "https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberries-2960533_960_720.jpg",
            tagNumber: 4,
          },
          {
            id: 5,
            name: "Platanos, Guineo libra",
            price: 5500,
            image:
              "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_960_720.jpg",
            tagNumber: 5,
          },
          {
            id: 6,
            name: "Limones Libra",
            price: 3000,
            image:
              "https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg",
            tagNumber: 6,
          },
          {
            id: 7,
            name: "Arandano nivel 2",
            price: 1000,
            image:
              "https://cdn.pixabay.com/photo/2021/11/11/16/05/fruits-6786607_960_720.jpg",
            tagNumber: 7,
          },
          {
            id: 8,
            name: "Pera ",
            price: 6500,
            image:
              "https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg",
        
            tagNumber: 8,
          },
          {
            id: 9,
            name: "Mora libra",
            price: 3500,
            image:
              "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",
            tagNumber: 9,
          },
    ],
    // carrito de la compra inicializado cart
    cart: [],
  };
  export function shoppingReducer(state, action){
    switch (action.type) {
      case TYPES.ADD_TO_CART:{
        let newItem = state.products.find(
          (product)=>product.id === action.payload
        );
        // console.log(newItem);
        let itemInCart = state.cart.find((item) => item.id === newItem.id);
        return itemInCart
        ? {
          ...state,
          cart: state.cart.map((item)=> 
           item.id === newItem.id
           ? {...item, quantity: item.quantity + 1}
           : item
          ),
        }
        : {
          ...state,
          cart: [...state.cart, {...newItem, quantity: 1}],
        };
      }
      case TYPES.REMOVE_ONE_FROM_CART:{
        let itemToDelete = state.cart.find((item)=> item.id === action.payload);
        return itemToDelete.quantity > 1
         ? {
          ...state,
          cart: state.cart.map((item)=>
           item.id === action.payload
            ? {...item, quantity: item.quantity -1 }
            :item),
         }
         : {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload)
         };
      }
      case TYPES.REMOVE_ALL_FROM_CART:{
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      }
      case TYPES.CLEAR_CART:
        return shoppingInitialState;      
      default:
       return state;
    }
  }