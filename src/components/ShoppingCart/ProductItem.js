import React from 'react';
const ProductItem = ({ data, addToCart }) => {
    let {id,name, price} = data;
    return (
        <div style={{border:"this solid gray", padding:"1rm"}}>
            <h4>{name}</h4>
            <h5>${price}.00</h5>
            <button onClick={()=>addToCart(id)}>agregar</button>
        </div>
    );
};
export default ProductItem;

