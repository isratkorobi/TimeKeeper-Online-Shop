import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import './Review.css';

const Review = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
    fetch("https://serene-cove-68348.herokuapp.com/addSReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));

    console.log(data);
  };
  return (
    <div className="ms-5">
      {/* <h1>Review</h1> */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input
          className="input-field form-control w-50"
          name="text"
          type="name"
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <br />
        <textarea {...register("description")} placeholder="Comment" className="form-control w-50" />
        <br/>
        <input
          className="input-field form-control w-50"
          name="text"
          type="name"
          placeholder="designation"
          {...register("dscg", { required: true })}
        /><br/>
        <input
          className="input-field form-control w-50"
          name="number"
          type="number"
          placeholder="Add rate"
          {...register("star", { required: true })}
        />
        <br/>
        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
          value="Add Review"
        />
      </form>
    </div>
  );
};

export default Review;