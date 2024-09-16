import React from "react";
import "./ProductCard.css"; // Create this CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.images[0]}
        alt={product.name}
        className="product-image"
      />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default ProductCard;
