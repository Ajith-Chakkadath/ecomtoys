import React, { useState } from "react";
import "./productDetails.css";
import { useEffect } from "react";
import product from "../../json/Product.json"
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { productid } = useParams();
  const [productDetails, setProductDetails] = useState({});

  useEffect(() => {
    const selectedProduct = product.find((p) => p.id === parseInt(productid, 10));
    setProductDetails(selectedProduct);
  }, [productid]);

console.log(productDetails)

  return (
    <div className="product-details-container">
      <img
        src={productDetails.img}
        alt="product image"
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-title">{productDetails.titile}</h2>
        <p className="product-description">{productDetails.des}</p>
        <p className="product-price">${productDetails.price}</p>
        <button className="buy-now-button">Buy now</button>
        <Link to="/">
          <button className="go-to-home" style={{ textDecaration: "none" }}>
            Go To Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;