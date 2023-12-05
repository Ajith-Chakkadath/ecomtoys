import React from 'react'
import product from "../../json/Product.json"
import { FaRupeeSign } from "react-icons/fa";
import "./home.css"
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="cart">

{
    product.map((product,i) => {
        return ( <>
        <div className="cartCard " key={i}>
            <div className='card-heading'>
            <h1 className='title'>{product.titile}</h1>
            </div>
          <div className='card-image'>
          <img
          className="cartImg"
          src={product.img}

        />
          </div>
       
        <div className="contentCard">
          <p className="price">Price</p>
          <p className="cost">
            {" "}
            <FaRupeeSign /> {product.price}
          </p>
        </div>
        <div className='product-action'>
            <button className='wishlist '> wishlist</button>
         <Link to={`/product-details/${product.id}`}>
         <button className='buy-now ' >Buy now</button>
         </Link>
          
        </div>
        </div>
        </>
     ) })
}


  
      </div>
  );
}
