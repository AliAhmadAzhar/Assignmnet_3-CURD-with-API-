
import React from "react";
import ApiClient from "../../Components/ApiClient";
import { useMutation } from "react-query";
import Loader from "../../Components/LoderComp";

const HandleUpdateApi = ({  details,productId , onUpdate, IsAdded }) => {

const UpdateProductClick = useMutation(
    async () => {
    const response = await ApiClient.put(`/products/${productId}` , details );
    console.log(productId);
    },
        {
        onSuccess: () => {
        onUpdate();
        IsAdded();
        }, 
    }
    );
    const AddProduct = async (data) => {
        console.log(details);
        console.log("PRINTING ID " +productId);
        UpdateProductClick .mutate(data);
    };

    if (UpdateProductClick .isLoading) {
    return (
    <span>
        Adding, please wait <Loader />
    </span>
    );
}
    if (UpdateProductClick.isError) {
    return <span>Error: {UpdateProductClick.error.message}</span>;
    }
    return (
        <button onClick={AddProduct} className="FormButton">
        Update Product
        </button>
    );
};

export default HandleUpdateApi;
