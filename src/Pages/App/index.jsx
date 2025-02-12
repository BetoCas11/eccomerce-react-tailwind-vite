import {useRoutes, BrowserRouter} from "react-router-dom";
import { useState } from 'react';
import Home from '../Home';
import Myaccount from '../Myaccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import SignIn from '../SignIn';
import NotFound from '../NotFound';
import NavBar from "../../Components/NavBar";

const Approutes = () => {
  
  let routes = useRoutes(
    [
    {path: '/', element: <Home></Home>},
    {path: '/account', element: <Myaccount></Myaccount>},
    {path: '/order', element: <MyOrder></MyOrder>},
    {path: '/orders', element: <MyOrders></MyOrders>},
    {path: '/signin', element: <SignIn></SignIn>},
    {path: '*', element: <NotFound></NotFound>},
    ]
  )
  return routes

}
function App() {
  return (
    <BrowserRouter>
      <Approutes></Approutes>
      <NavBar></NavBar>
    </BrowserRouter>
  )
}

export default App
