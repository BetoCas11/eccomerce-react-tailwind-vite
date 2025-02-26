import React from "react"
import Layout from "../../Components/Layout"
import { ShoppingCardContext } from "../../Context"

function HistoryOrders() {
  const {orderDay} = React.useContext(ShoppingCardContext);
  const URLLocation = window.location.pathname
  const lastLocation = URLLocation.lastIndexOf("/");
  const locationID = URLLocation.substring(lastLocation + 1);
  const shopping = orderDay.filter(item => item.purchaseID == locationID);
  const date = shopping[0].products[0].paymentDate.split(" ");
    return (
      <>
        <section className="h-[calc(100%-80px)] w-[75%] max-w-[1050px] mt-20 text-white text-center border border-gray-50 ps-5">
          <time className="flex gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
            <p>{date[0]}/{date[2]}/{date[4]}</p>
          </time>
          {shopping[0].products.map(item => {
            return (
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
            )
          })}
            <span className="flex justify-end pe-3.5 gap-x-2.5 font-black text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
              $ {shopping[0].price}
              </span> 
        </section>
      </>
    )
  }
  
  export default HistoryOrders