import React, { useEffect } from "react";
import { ShoppingCardContext } from "../../Context";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import CartProducts from "../../Components/CartProducts";

function Categories () {
    const {items, asideBar, showProducts} = React.useContext(ShoppingCardContext);
        /* Filtrar mediante la ruta */
    const currentRoute = location.pathname.slice(1);
    const filterCategories = () => items.filter(item => item.category.slug == currentRoute);
    const categories = ["clothes","electronics","furniture","toys"];
    return (
        <>
            {
              asideBar && <ProductDetail></ProductDetail>
            }
            {
              showProducts && <CartProducts></CartProducts>
            }
            
            <Layout>
                 {filterCategories() != 0  ? filterCategories().map(item => {
                    return <Card key={item.name} data={item}></Card>
                }) :    currentRoute == "others" ? items.filter(item => !categories.includes(item.category.slug)).map(item => {
                    return <Card key={item.name} data={item}></Card>
                }):  <p className="text-white">No hay más  para {currentRoute}</p> }
                
            </Layout>
        </>
    );
}

export default Categories;
