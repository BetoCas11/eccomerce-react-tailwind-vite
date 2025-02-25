import React from "react";
import { ShoppingCardContext } from "../../Context";
import "./style.css";
import AsideBar from "../AsideBar";

function ProductDetail () {
    const {setAsideBar, productToShow, cartProducts} = React.useContext(ShoppingCardContext);
    const spellingDescription = productToShow.description.charAt(0).toUpperCase() + productToShow.description.slice(1);
    const spellingTitle = productToShow.title.charAt(0).toUpperCase() + productToShow.title.slice(1);
    return(
        <AsideBar showProducts={setAsideBar} text={"Details"}>
                <figure className="w-full h-full content-center">
                    <img className="my-5" src={productToShow.image} alt={productToShow.title} />
                    <figcaption>
                        <h3 className="inline-block w-[calc(100%-50px)] font-medium">{spellingTitle}</h3>
                        <span className="font-bold w-[230px] text-lg">$ {productToShow.price}</span>
                        <p>{spellingDescription}</p>
                    </figcaption>
                </figure>
        </AsideBar>
    )
}

export default ProductDetail