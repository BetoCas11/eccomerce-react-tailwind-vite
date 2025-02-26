import React, { useEffect, useState } from "react";
import { ShoppingCardContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CartProducts from "../../Components/CartProducts";
 


function Home() {

    const {items, asideBar, showProducts, titleBySearch,setTitleBySearch, filterItems,setFilterItems, currentRoute} = React.useContext(ShoppingCardContext);
    const handlingText = (e) => {
      const searchValue = e.target.value.toLocaleLowerCase();
      setTitleBySearch(searchValue);
      const filterProducts = items.filter(item => {
        const valueText = item.title.toLocaleLowerCase();
        return valueText.includes(searchValue);
      })
      setFilterItems(filterProducts)
    }
    return (
      <>
        <Layout>
            {
              asideBar && <ProductDetail></ProductDetail>
            }
            {
              showProducts && <CartProducts></CartProducts>
            }
            <header className="fixed top-28 bg-transparent z-10  w-full">
              <h1 className="text-white text-center font-black text-3xl">All Products</h1>
              <input type="text" placeholder="Search Products" className="w-[380px] p-1.5 bg-white border-2 border-gray-400  block mx-auto text-center placeholder:text-center focus:border-2" onChange={handlingText}/>
            </header>

           {/* {filterItems != 0 ? filterItems.map(card => { return <Card key={card.id} data={card}/>}) : items.map(card => { return <Card key={card.id} data={card}/>})} */}
           {titleBySearch == false ? items.map(card => { return <Card key={card.id} data={card}/>}) : filterItems != 0 ? filterItems.map(card => { return <Card key={card.id} data={card}/>}) : <p className="text-white">Nothing (。﹏。*)</p> }
        </Layout>
      </>
    )
  }
  
  export default Home
  