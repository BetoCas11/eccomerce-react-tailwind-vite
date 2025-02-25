import {useRoutes, BrowserRouter} from "react-router-dom";
import { useState } from 'react';
import {ShoppingCardProvider} from "../../Context";
import Home from '../Home';
import Myaccount from '../Myaccount';
import HistoryOrders from '../HistoryOrders';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import NavBar from "../../Components/NavBar";

const Approutes = () => {
  
  let routes = useRoutes(
    [
    {path: '/', element: <Home></Home>},
    {path: '/all', element: <Home></Home>},
    {path: '/account', element: <Myaccount></Myaccount>},
    {path: '/history/:id', element: <HistoryOrders></HistoryOrders>},
    {path: '/orders/last', element: <MyOrders></MyOrders>},
    {path: '/signin', element: <SignIn></SignIn>},
    {path: '*', element: <NotFound></NotFound>},
    ]
  )
  return routes

}
function App() {
  return (
    <ShoppingCardProvider>
      <BrowserRouter>
        <Approutes></Approutes>
        <NavBar></NavBar>
      </BrowserRouter>
    </ShoppingCardProvider>
  )
}

export default App
