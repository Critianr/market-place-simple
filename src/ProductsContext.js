import React, { useState, useEffect } from "react";
export const ProductContext = React.createContext();
const productsArray = [
  {
    name: "Tomates libra a:",
    price: 2000,
    image:
      "https://cdn.pixabay.com/photo/2011/03/16/16/01/tomatoes-5356_960_720.jpg",
    tagNumber: 1,
  },
  {
    name: "Naranjas libra",
    price: 3180,
    image:
      "https://cdn.pixabay.com/photo/2016/10/07/14/11/tangerines-1721633_960_720.jpg",
    tagNumber: 2,
  },

  {
    name: "Arándano rojo Libra",
    price: 24000,
    image:
      "https://cdn.pixabay.com/photo/2016/04/13/07/18/blueberries-1326154_960_720.jpg",
    tagNumber: 3,
  },
  {
    name: "Fresas Libra",
    price: 7990,
    image:
      "https://cdn.pixabay.com/photo/2017/11/18/17/09/strawberries-2960533_960_720.jpg",
    tagNumber: 4,
  },
  {
    name: "Platanos, Guineo libra",
    price: 5500,
    image:
      "https://cdn.pixabay.com/photo/2016/01/03/17/59/bananas-1119790_960_720.jpg",
    tagNumber: 5,
  },
  {
    name: "Limones Libra",
    price: 3000,
    image:
      "https://cdn.pixabay.com/photo/2017/02/05/12/31/lemons-2039830_960_720.jpg",
    tagNumber: 6,
  },
  {
    name: "Arandano nivel 2",
    price: 1000,
    image:
      "https://cdn.pixabay.com/photo/2021/11/11/16/05/fruits-6786607_960_720.jpg",
    tagNumber: 7,
  },
  {
    name: "Pera ",
    price: 6500,
    image:
      "https://cdn.pixabay.com/photo/2016/07/22/09/59/fruits-1534494_960_720.jpg",

    tagNumber: 8,
  },
  {
    name: "Mora libra",
    price: 3500,
    image:
      "https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_960_720.jpg",
    tagNumber: 9,
  },
];

export const ProductProvider = (props) => {
  const [products, setProducts] = useState(productsArray);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
