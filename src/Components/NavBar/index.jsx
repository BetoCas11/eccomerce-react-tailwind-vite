import { NavLink } from "react-router-dom";

function NavBar () {
    const activeStyle = "underline underline-offset-4";
    return (
        <nav className="flex gap-2 text-[15px]  text-lg justify-between w-full h-auto px-8 py-5 fixed  z-10">
            <ul className="flex gap-3.5 flex-wrap justify-center items-center ">
                <li className="font-black text-lg">
                    <NavLink to='/' >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/all' className={({isActive}) => isActive ? activeStyle : undefined}>
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
                    <NavLink to='/orders' className={({isActive}) => isActive ? activeStyle : undefined}>
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
                <li>🛒 0 </li>
            </ul>
        </nav>
    )
}
export default NavBar