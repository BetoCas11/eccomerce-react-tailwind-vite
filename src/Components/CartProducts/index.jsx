import React from "react";
import { ShoppingCardContext } from "../../Context";
import AsideBar from "../AsideBar";
import { Link } from "react-router-dom";
const styleBar = {
    scrollbarWidth: "none"
};

function CartProducts () {
    const {setCount, setShowProducts, cartProducts, setCartProducts, priceTotal, orderDay,setOrderDay, setTitleBySearch, setFilterItems} = React.useContext(ShoppingCardContext);
    
    const deletedProduct = (remove, decrement) => {
        const products = [...cartProducts];
        const productToIndex = products.findIndex(item => item.title == remove);
        products.splice(productToIndex, 1);
        setCartProducts(products);
        setCount( prevV => prevV - decrement);
    };
    const paymentProcess = () => {
        setOrderDay(prevV => [...prevV, {"products" : cartProducts, "price": priceTotal, "purchaseID": Math.floor(Math.random() * 100000).toString(8)}]);
        setCount(0)
        setCartProducts([]);
        setTitleBySearch("");
    };
    return (
        <AsideBar showProducts={setShowProducts} text={"Your Cart (My order)"}>

            <section className="w-full h-full content-center overflow-y-scroll " style={styleBar}>
                {cartProducts.length == 0 ? <p>There is no element</p> : 
                  cartProducts.map((item) => {
                    const countPrduct = item.price / item.priceOriginal;
                   return (
                    <figure className="w-full flex justify-between my-[10px] relative" key={Math.random() * item.id}>
                      <img src={item.image} alt="" className="w-16 h-2w-16 object-cover"/>
                      <span className="absolute bg-neutral-200 rounded-[100%] w-[24px] h-[24px]] text-center">{countPrduct}</span>
                      <figcaption className="flex items-center justify-between w-[calc(100%-68px)]">
                         <h3 className="w-[130px] text-balance">{item.title} </h3>
                         <span className="font-medium">$ {item.price}</span>
                         <button className="cursor-pointer font-extrabold hover:text-red-600" onClick={() => deletedProduct(item.title, countPrduct)}>X</button>
                      </figcaption>
                    </figure>
              )
              })}
            </section>
            <footer className="w-full inline text-end">Total: 
                <p className="inline w-max mx-3.5">$ {priceTotal }</p>
                {priceTotal != 0 ? <Link to='/orders/last'><button className="cursor-pointer w-max  p-1 border-2 rounded-2xl bg-black text-white hover:border-green-300 hover:text-green-300  box-border" onClick={() => paymentProcess()}>Checkout</button></Link> : null }
                </footer>
        </AsideBar>
    )
}

export default CartProducts;