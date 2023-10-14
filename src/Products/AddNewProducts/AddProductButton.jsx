
import React from "react";
import ApiClient from "../../Components/ApiClient";
import { useMutation } from "react-query";
import Loader from "../../Components/LoderComp";

const AddProductButton = ({ details, HandleAddProduct, IsAdded }) => {
    
const AddProductClick = useMutation(
    async () => {
    const response = await ApiClient.post("/products", details);
    },
        {
        onSuccess: () => {
        HandleAddProduct();
        IsAdded();
        },
    }
    );
    const AddProduct = async (data) => {
        AddProductClick.mutate(data);
    };

    if (AddProductClick.isLoading) {
    return (
    <span>
        Adding, please wait <Loader />
    </span>
    );
}
    if (AddProductClick.isError) {
    return <span>Error: {AddProductClick.error.message}</span>;
    }
    return (
        <button onClick={AddProduct} className="FormButton">
        Add Product
        </button>
    );
};

export default AddProductButton;
