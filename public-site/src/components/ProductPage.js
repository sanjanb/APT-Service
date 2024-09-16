import React, { useEffect, useState } from "react";
import { getProductById } from "../api/productApi"; // Add this API call in productApi.js
import "./ProductPage.css"; // Create this CSS file for styling

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await getProductById(match.params.id);
      setProduct(productData);
    };
    fetchProduct();
  }, [match.params.id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img
        src={product.images[0]}
        alt={product.name}
        className="product-image"
      />
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};

export default ProductPage;
