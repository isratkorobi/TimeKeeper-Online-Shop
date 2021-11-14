import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const Order = () => {
  // const [user, setUser] = useState({});
  const [service, setService] = useState({});
  const { user } = useAuth();
  const { itemId } = useParams();

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    // data.email = user?.email;
   await fetch("http://localhost:5000/addOrders", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
      // .then((res) => res.json())
      // .then((result) => console.log(result));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleproducts/${itemId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div>
      <div className="">
        <h1 className="text-center py-4" style={{fontSize: "32px", fontWeight: "600"}}>Product Details</h1>
        <div className="container">
          <div className="details-container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="img-fluid" src={service?.img} alt="" />
                <h2 className="pt-4 pb-2" style={{fontSize: "25px", fontWeight: "600"}}>{service?.name}</h2>
                <p>{service?.description}</p>
                <h4>${service?.price}</h4>
              </div>
              <div className="col-md-6">
                <h3 className="text-center fw-bold p-3">Add Your Order</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name")}
                    placeholder="Product Name"
                    defaultValue={service?.name}
                    className="form-control w-75 m-auto py-3 mb-3"
                  />
                  <input
                    {...register("name", { required: true })}
                    placeholder="User Name"
                    className="form-control w-75 m-auto py-3 mb-3"
                  />
                  <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className="form-control w-75 m-auto py-3 mb-3"
                  />
                  <input
                    {...register("date", { required: true })}
                    placeholder="date"
                    defaultValue={new Date()}
                    className="form-control w-75 m-auto py-3 mb-3"
                  />
                  <input
                    {...register("description", { required: true })}
                    placeholder="Description"
                    className="form-control w-75 m-auto py-3 mb-4"
                  />
                  <input type="submit" className="form-control w-75 m-auto bg-primary text-light " />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
