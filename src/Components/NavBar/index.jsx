import { NavLink } from "react-router-dom";
import {ShoppingCardContext} from "../../Context";
import React from "react";

function NavBar () {
    const activeStyle = "underline underline-offset-4";
    const {count, cartProducts, setAsideBar, setShowProducts} = React.useContext(ShoppingCardContext);
    const showCart = () => {
        setAsideBar(false);
        setShowProducts(prevV => !prevV)
    };
    return (
        <nav className="flex gap-2 text-[15px] text-lg justify-between w-full h-auto px-8 py-5 fixed top-0 z-10 border-b shadow-2xl bg-stone-100">
            <ul className="flex gap-3.5 flex-wrap justify-center items-center ">
                <li className="font-black text-lg flex items-center">
                    <NavLink to='/' onClick={() => setShowProducts(false)}>
                        Shopi
                    </NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </li>
                <li>
                    <NavLink to='/all' className={({isActive}) => isActive ? activeStyle : undefined} onClick={() => setShowProducts(false)}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex gap-3.5 flex-wrap justify-center items-center">
                <li className="text-black/60">
                    beto@gmail.com
                </li>
                <li>
                    <NavLink to='/orders/last' className={({isActive}) => isActive ? activeStyle : undefined} onClick={() => setShowProducts(true)}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/account' className={({isActive}) => isActive ? activeStyle : undefined}>
                        My account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signin' className={({isActive}) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="cursor-pointer flex items-center" onClick={() => showCart()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>

                     <span>{count}</span> 
                </li>
            </ul>
        </nav>
    )
}
export default NavBar