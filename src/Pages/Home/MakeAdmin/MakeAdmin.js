import React,{useState} from "react";
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
  const { register, handleSubmit, reset} = useForm();
  const [message, setMessage] = useState(null);
  const onSubmit = (data) =>{
      fetch("https://serene-cove-68348.herokuapp.com/makeAdmin",{
          method: "PUT",
          headers: {"content-type": "application/json"},
          body: JSON.stringify(data),
      })
      .then((res)=> res.json())
      .then((result)=>{

        if(result.modifiedCount){
          setMessage('Make Admin Successfully');
        }
        reset();
      });
   
      
  }
  return (
    <div className="ms-5">
      <h1 style={{fontSize: "26px", paddingBottom: "20px"}}>Make an admin</h1>
      {
        <p>{message}</p>
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: true })}
          placeholder="Email"
          type="email" className="form-control w-50 mb-3"
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default MakeAdmin;
