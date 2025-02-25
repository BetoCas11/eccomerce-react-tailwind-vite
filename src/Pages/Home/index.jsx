import React, { useEffect, useState } from "react";
import { ShoppingCardContext } from "../../Context";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import CartProducts from "../../Components/CartProducts";
 


function Home() {
   /*  const [items, setItems] = useState([]); */
    const {items, asideBar, showProducts} = React.useContext(ShoppingCardContext);
/*     const APIURL = 'https://api.escuelajs.co/api/v1/products';

    useEffect(() => { 
      async function fetchData (url) {
        const res =  await fetch(url);
        const data = await res.json();
        setItems(data);

      };
      fetchData(APIURL);
  }, []);
 */    
    return (
      <>
        <Layout>
            {
              asideBar && <ProductDetail></ProductDetail>
            }
            {
              showProducts && <CartProducts></CartProducts>
            }
           {
           items.map(card => { return <Card key={card.id} data={card}/>})
           }
        </Layout>
      </>
    )
  }
  
  export default Home
  