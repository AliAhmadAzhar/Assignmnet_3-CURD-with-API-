import React from "react";
import ApiClient from "../../Components/ApiClient";
import { useMutation } from "react-query";
import Loader from "../../Components/LoderComp";

const DeleteButton = ({ productId, onDelete }) => {
  const Delete = useMutation(
    async () => {
      const response = await ApiClient.delete(`/products/${productId}`);
      console.log("API Response:", response);
    },
    {
      onSuccess: () => {
        onDelete();
      },
    }
  );
  const handleDeleteClick = async (data) => {
    Delete.mutate(data);
  };

  if (Delete.isLoading) {
    return (
      <span>
      Deleting, please wait <Loader />
      </span>
    );
  }

  if (Delete.isError) {
    return <span>Error: {Delete.error.message}</span>;
  }

  return (
    <button onClick={handleDeleteClick} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteButton;
