import React, { useEffect } from "react";
import { ShoppingCardContext } from "../../Context";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import CartProducts from "../../Components/CartProducts";

function Categories () {
    const {items, asideBar, showProducts, setTitleBySearch, setFilterItems, filterItems, titleBySearch, filterBypreviewCategory, setFilterByPreviewCategory} = React.useContext(ShoppingCardContext);
        /* Filtrar mediante la ruta */
    const currentRoute = location.pathname.slice(1);
    const filterCategories = () => items.filter(item => item.category.slug == currentRoute);
    const categories = ["clothes","electronics","furniture","toys"];
    const handlingText = (e) => {
        const searchValue = e.target.value.toLocaleLowerCase();
        setTitleBySearch(searchValue);
        const filterProducts = filterCategories().filter(item => {
          const valueText = item.title.toLocaleLowerCase();
          return valueText.includes(searchValue);
        })
        setFilterByPreviewCategory(filterProducts)
      };
    const othersCategories = items.filter(item => !categories.includes(item.category.slug)).map(item => {return <Card key={item.name} data={item}></Card> });
    const othersCategoriesInputFilter = items.filter(item => !categories.includes(item.category.slug)).filter(item => item.title.toLocaleLowerCase().includes(titleBySearch))
      
    const inputFalseValue = titleBySearch == false ;
    return (
        <>
            {
              asideBar && <ProductDetail></ProductDetail>
            }
            {
              showProducts && <CartProducts></CartProducts>
            }
            <header className="fixed top-28 bg-transparent z-10  w-full">
              <h1 className="text-white text-center font-black text-3xl">Category: {currentRoute}</h1>
              <input type="text" placeholder="Search Products" className="w-[380px] p-1.5 bg-white border-2 border-gray-400  block mx-auto text-center placeholder:text-center focus:border-2" onChange={handlingText}/>
            </header>
            
            <Layout>
                 {filterCategories() != 0  ? inputFalseValue ? filterCategories().map(item => {
                    return <Card key={item.name} data={item}></Card>
                }) : filterBypreviewCategory != 0 ? filterBypreviewCategory.map(card => { return <Card key={card.id} data={card}/>}) : <p className="text-white">Nothing (。﹏。*)</p> :    
                currentRoute == "others" ? inputFalseValue ?  othersCategories : othersCategoriesInputFilter != 0 ? othersCategoriesInputFilter.map(card => { return <Card key={card.id} data={card}/>}) : <p className="text-white">Nothing (。﹏。*)</p>
                :  <p className="text-white">No hay más  para {currentRoute}</p> }
                
            </Layout>
        </>
    );
}

export default Categories;
