import React, { useState, useEffect } from "react";
import "./AbstractProduct.css";
import ApiClient from "../Components/ApiClient";
import ProductInfo from "./ProductInfo";
import AddProduct from "../Components/ProductInputForm";
import { useQuery } from "react-query";
import LoaderComp from "../Components/LoderComp";

const handleProducts = async () => {
  try {
    const response = await ApiClient.get("products?");
    return response; 
  } catch (error) {
    throw new Error("Error fetching products");
  }
};
const AbstractProducts = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { data: products, error, isLoading, refetch } = useQuery('myData', handleProducts);

  if (isLoading) return  <h1>LOADING DATA <LoaderComp/></h1>;

  if (error)  return <div>Error occurred</div>;
  
  const HandleRender = () => {
    refetch();
  }

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };




  return (
    <div className="profile-container">
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <ProductInfo
              data={product}
              currentImageIndex={currentImageIndex}
              onPrevClick={handlePrevClick}
              onNextClick={handleNextClick}
              onDelete={HandleRender}
              onUpdate={HandleRender}
            />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}

        <AddProduct HandleAddProduct = {HandleRender} type={true} ShowForm={true} /> 
    </div>
  );
};

export default AbstractProducts;
