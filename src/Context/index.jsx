import React from 'react';
import { createContext } from 'react'
import { useEffect } from 'react';


const ShoppingCardContext = createContext();

function ShoppingCardProvider ({children}) {

    const [count, setCount] = React.useState(0);
    /* Barra lateral para los detalles */
    const [asideBar, setAsideBar] = React.useState(false);
    

    /*Guardar los productos con un estado*/
    const [productToShow, setProductToShow] = React.useState({});
   
/* Barra-carro */
    const [showProducts, setShowProducts] = React.useState(false);
    const [cartProducts, setCartProducts] = React.useState([]);

    const priceTotal = cartProducts.length > 0 ? [...cartProducts].map(item => item.price).reduce((a,b) => a + b) : 0;

    /* Del carro a ordenes del día */
    const [orderDay, setOrderDay] = React.useState([]);

/* Crear Estado para productos ya pagados (un historial) */

    return (
        <ShoppingCardContext.Provider value={{
            count, 
            setCount,
            asideBar,
            setAsideBar,
            productToShow,
            setProductToShow,
            cartProducts, 
            setCartProducts,
            showProducts,
            setShowProducts,
            priceTotal,
            orderDay,
            setOrderDay
        }}>
            {children}
        </ShoppingCardContext.Provider>
    )
}

export  {ShoppingCardProvider, ShoppingCardContext};