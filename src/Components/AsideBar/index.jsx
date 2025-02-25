import React from "react";
import { ShoppingCardContext } from "../../Context";

function AsideBar ({children, showProducts, text}) {
    return (
        <aside className="w-[300px] h-[calc(100vh-80px)] p-3 bg-white fixed right-2.5 top-[75px] z-10 flex flex-col border border-gray-300 rounded-tl-3xl rounded-bl-3xl overflow-y-scroll ">
            <header className="flex justify-between items-center">
                <h2 className="font-medium text-xl">{text}</h2>
                <button className="cursor-pointer" onClick={() => showProducts(false)}>❌</button>
            </header>
            {children}
        </aside>
    )
}

export default AsideBar;