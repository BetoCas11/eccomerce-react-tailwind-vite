import React, { useEffect } from "react";
import { ShoppingCardContext } from "../../Context";

const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio","Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

function Card({data}){
    const {setCount, setAsideBar, setProductToShow, setCartProducts, setShowProducts, cartProducts} = React.useContext(ShoppingCardContext);
    const [otherImgs, setOtherImgs] = React.useState(""); 
    const hours = new Date().getHours() % 12 == 0 ? 12 : new Date().getHours() % 12;
    const minutes = `${new Date().getMinutes()}`.length == 1 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
    const period = new Date().getHours() <= 12 ? "a.m." : "p.m.";
    const dateTime = `${new Date().getDate()} de ${month[new Date().getMonth()]} de ${new Date().getFullYear()}, a las ${hours}: ${minutes} ${period}` ; 
    const spellingTitle = data.title.charAt(0).toUpperCase() + data.title.slice(1);
    const isInCart = cartProducts.findIndex(item => item.title == spellingTitle);
    const dataImg = data?.images;
    const isArray = (array) => Array.isArray(array);
    useEffect(() => {
        const randomNumber = Math.floor(Math.random() * 200);
        setOtherImgs( `https://picsum.photos/640/480?random=${randomNumber}`);
    }, [])
    const invalidURL = ["https://placeimg.com/640/480/any", "https://example.com/sample.jpg", "https://placeimg.com/640/480/anzaaay", "https://picsum.photos/200", "https://pravatar.cc/", "https://api.escuelajs.co/api/v1/files/4f9e.jpg", "https://api.escuelajs.co/docs.jpg", "https://test.png", "https://via.placeholder.com/150", "https://via.placeholder.com/300", "https://www.freepik.es/vector-gratis/conjunto-pegatinas-moda-disenos-graficos-vectoriales-coloridos_20775660.htm#fromView=keyword&page=1&position=0&uuid=8c535cf6-7bd5-4a94-9d42-f21a146a0c73&query=Ropa", "https://img.freepik.com/free-photo/person-with-sexual-toy-bed_23-2149352504.jpg?semt=ais_hybrid"];

    const parsedImg = isArray(dataImg) ? 
        dataImg[0].includes("[") ? 
            JSON.parse(dataImg)[0] : dataImg[0] 
    : undefined;

    const dataType = typeof parsedImg;
    const isInvalid = invalidURL.some(item => item == parsedImg);
    const srcImg = dataType == "string" && !isInvalid ? parsedImg : otherImgs;

    const addProduct = (detailProduct) => {
        setCount(prevValue => prevValue + 1);
        setCartProducts(prevV => {
            if (isInCart != -1) {
                // Si el ítem existe, duplica su precio
                const updatedCartProducts = prevV.map((item, index) => {
                    if (index === isInCart) {
                        return {
                            ...item,
                            price: item.price + detailProduct.price
                        };
                    }
                    return item;
                });
                return updatedCartProducts;
            }
            else{
                return [...prevV, {
                    "priceOriginal": detailProduct.price,
                    "price": detailProduct.price,
                    "title": detailProduct.title,
                    "description": detailProduct.description,
                    "image": srcImg,
                    "id": detailProduct.id,
                    "quantity": Math.floor(Math.random() * detailProduct.id),
                    "paymentDate": dateTime,
                }];
            }
        })

 /*     isInCart != -1 ? console.log(cartProducts[isInCart].price+=detailProduct.price) : 
        setCartProducts(prevV => [...prevV, {
            "price": detailProduct.price,
            "title": detailProduct.title,
            "description": detailProduct.description,
            "image": srcImg,
            "id": detailProduct.id
        }]); */
;




    }
    const productShow = (e, detailProduct) => {
        if(!e.target.closest("svg")){
            setAsideBar(true);
            setProductToShow({
                "price": detailProduct.price,
                "title": detailProduct.title,
                "description": detailProduct.description,
                "image": srcImg,
                "id": detailProduct.id
            });
            setShowProducts(false);
        } 
    }

    return(
        <article className="bg-stone-100 cursor-pointer w-56 h-[325px] border-2 rounded-2xl" onClick={(e) => { productShow(e, data)}}>
            <figure className="relative w-full h-full flex flex-col">
                {srcImg ? <img src={srcImg} alt={data?.title} className="w-full h-[200px] object-cover rounded-t-2xl"/> : null}
                <span className=" text-xs absolute left-[10px] bottom-[40%] bg-white/60 p-1 rounded-md">{data?.category?.name}</span>
                <button className="absolute right-1.5 top-1.5 cursor-pointer w-[30px] h-[30px] flex items-center justify-center text-[25px] bg-white rounded-full text-black hover:bg-stone-300" onClick={() => {addProduct(data)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            <figcaption className="w-full h-[calc(100%-200px)] flex justify-between items-center px-1">
                <span className="w-[70%]">{spellingTitle || "New Product"}</span>
                <p>$ {data?.price || 100}</p>
            </figcaption>
            </figure>
        </article>
    )
}

export default Card