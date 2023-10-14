import React, { useState } from "react";
import AddProduct from "../../Components/ProductInputForm";
import "../../Components/ProductInputForm.css";

const UpdateButton = ({productId, onUpdate }) => {
  const [details ,setdetails] = useState(false);
  const handleUpdateClick = () => {
    setdetails(true);
  };
  return (
    <div>
    <button onClick={handleUpdateClick} className="delete-button">
      Update
    </button>
    
    {details ? (
    <AddProduct onUpdate={onUpdate}  type={false} ShowForm={false} productId={productId} />
  ) : null}
  </div>
  );
};

export default UpdateButton;
