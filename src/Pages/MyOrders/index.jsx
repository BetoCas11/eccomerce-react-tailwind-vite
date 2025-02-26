import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCardContext } from "../../Context";
import Layout from "../../Components/Layout";
import CartProducts from "../../Components/CartProducts";

function MyOrders() {
  const { showProducts, orderDay, setTitleBySearch} = React.useContext(ShoppingCardContext);
  console.log(orderDay.map(item => item));
  console.log(orderDay.map(item => item.price));
  console.log((orderDay.map((item) => item.products).flat(Infinity)));
    return (
      <>
            {
              showProducts && <CartProducts></CartProducts>
            }
            {
              orderDay != 0 ? 
              <details name="Historal" className="fixed left-2.5 top-32 p-2 border border-white">
                <summary className="text-white cursor-pointer">History</summary>
                <ul>
                  {orderDay.map(item => {
                    return (
                      <>
                        <li className="text-white hover:underline cursor-pointer mb-2.5 ">
                            <NavLink to={`/history/${item.purchaseID}`}>
                              Purchase ID: {item.purchaseID}
                            </NavLink>
                        </li>
                      </>
                    )
                  })}
                </ul>
              </details> : undefined
            }
            <section className="h-[calc(100%-80px)] w-[75%] max-w-[1050px] mt-20 text-white text-center border border-gray-50 ps-5">
              {orderDay == 0 ? <p> "Sin ordenes aún!"</p> : 
                orderDay.map((item) => item.products).flat(Infinity).map(item => { return (
                  <>
                  <article key={Math.random() * item.id} className="w-3/5 block mx-auto my-[20px]">
                    <figure className="w-full h-[130px] object-cover flex">
                      <img src={item.image} alt={item.title} className="w-[130px] h-full object-cover" />
                      <figcaption className="w-[calc(100%-130px)] flex justify-between">
                        <span className="w-3/4 text-start ps-3">
                          <h3 className="font-medium text-balance">{item.title}</h3>
                          <p className="font-extrabold">$ {item.priceOriginal}</p>
                          <p>Quantity: {item.price / item.priceOriginal}</p>
                        </span>
                        <time className="font-light flex gap-x-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          <p>{item.paymentDate.split(" ").at(-3)}{item.paymentDate.split(" ").at(-2)} {item.paymentDate.split(" ").at(-1)}</p>
    
                        </time>
                      </figcaption>
                    </figure>
                  </article> 
                  </>
                  )})
                  
              }
              <span className="flex justify-end pe-3.5 gap-x-2.5 font-black text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                </svg>
                $ {orderDay.map(item => item.price).reduce((a,b) => a + b)}
              </span> 
            </section>

      </>
    )
  }
  
  export default MyOrders