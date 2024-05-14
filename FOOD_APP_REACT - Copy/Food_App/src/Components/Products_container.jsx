import React, { useState, useEffect, useContext } from 'react';
import '../App.css'
import { FaBeer, FaCaretSquareDown, FaCartArrowDown } from "react-icons/fa";




import { CartContext } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';



const ProductList = () => {
    
   

    const box=useContext(CartContext);
    console.log(box.cartItems);
    return (
        <div className="flex flex-col">
            <Link to="/Cart"  className=" text-[30px] self-end  relative w-10 box-content text-white m-0 "><FaCartArrowDown/></Link>
            <h1 className='my-10'>Product List</h1>
            <ul className='card_contatiner'>
                
                    <div className='card rounded-lg'>
                        <h2 className="text-yellow-400 text-[20px]">{"Product_Name"}</h2>
                        <p>Price: { "Product Price"}</p>
                        <p>Status: {"Product Status"}</p>
                        <button  className='add_cart_button my-3'>Add to Cart</button>
                    </div>

            </ul>
        </div>
    );
    
};

export default ProductList;