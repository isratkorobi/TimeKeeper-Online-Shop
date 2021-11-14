import React from "react";
import "./AddProduct.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/products", data).then((res) => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
    } 
    });
  };
  return (
    <div className="add-product text-center">
      <h1 style={{fontSize: "26px"}}>Please add a product</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name" className="form-control"
        />
        <textarea {...register("description")} placeholder="Description" className="form-control" />
        <input type="number" {...register("price")} placeholder="Price" className="form-control" />
        <input {...register("img")} placeholder="image url" className="form-control" />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddProduct;
