import React from "react";
import DeleteButton from "./DeleteProduct/DeleteProductButton";
import UpdateButton from "./UpdateProduct/UpdateButton"

const ProductInfo = ({ data, currentImageIndex, onPrevClick, onNextClick, onDelete , onUpdate }) => {
  return (
    <div className="card" key={data.id}>
      <div className="profile">
        <img
          src={data.images[currentImageIndex]}
          id="profile-img"
          alt={data.title}
        />
        <button onClick={onPrevClick}>&lt;</button>
        <button onClick={onNextClick}>&gt;</button>
      </div>
      <div>
        <p>
          <label className="name">Name : </label> {data.title}
        </p>
        <p>
          <label className="name">Price : </label>
          {data.price}
        </p>
        <p style={{ padding: "10px" }}>
          <label className="name" style={{ padding: "0px" }}>
            Description:
          </label>
          {data.description}
        </p>  
        <DeleteButton productId={data.id} onDelete={onDelete} />
        <UpdateButton productId={data.id} onUpdate={onUpdate} />
        
      </div>
    </div>
  );
};

export default ProductInfo;
