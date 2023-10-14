import React, { useState } from "react";
import AddProductButton from "../Products/AddNewProducts/AddProductButton";
import "./ProductInputForm.css";
import HandleUpdateApi from "../Products/UpdateProduct/HandleUpdateApi";

const AddProduct = ({ HandleAddProduct, type, productId, onUpdate , ShowForm}) => {
  const [toggle, setToggle] = useState(type);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");

  const Newproduct = () => {
    setToggle(false);
  };

  const closeForm = () => {
    setToggle(true);
  };

  const IsAdded = () => {
    setToggle(true);
  };

  const createProductObject = () => {
    return {
      title,
      price: parseInt(price),
      description,
      categoryId: parseInt(category),
      images: [imageLink],
    };
  };

  return (
    <div>
      {toggle && (
        <button className="AddproductTopButton" onClick={Newproduct}>
          Add Item
        </button>
      )}
      {!toggle && (
        <div
          className="UpdateForm"
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex">
            <label className="FormLabel">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="FormLabel">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="FormLabel">Category</label>
            <input
              type="number"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="FormLabel">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex">
            <label className="FormLabel">Image Link</label>
            <input
              type="text"
              name="imageLink"
              value={imageLink}
              onChange={(e) => setImageLink(e.target.value)}
            />
          </div>
          <button className="FormButton" onClick={closeForm}>
            Close
          </button>
          {ShowForm ? (
            <AddProductButton
              details={createProductObject()}
              HandleAddProduct={HandleAddProduct}
              IsAdded={IsAdded}
            />
          ) : (
            
            <HandleUpdateApi
              details={createProductObject()}
              onUpdate={onUpdate}
              productId={productId}
              IsAdded={IsAdded}   
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AddProduct;
