import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "./../../../Hooks/useAuth";
const Register = () => {
   
     
    const {signInWithGoogle, handleUserInfoRegister, createAccountWithGoogle, setUser , setIsLoading , updateName } = useAuth();

    const history= useHistory()
    const location = useLocation()
    const url= location.state?.from || "/home"

const [name , setName] =useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')


const handleGetName=(e)=> {
    // console.log(e.target.value);
   setName(e.target.value)
}

const handleGetEmail=(e)=> {
    // console.log(e.target.value);
   setEmail(e.target.value)
}

const handleGetPassword=(e)=> {
    // console.log(e.target.value);
   setPassword(e.target.value)
}



const handleRegistration=(e)=> {
    e.preventDefault();
    createAccountWithGoogle(email,password)
    .then((res) => {
      setIsLoading(true)
      updateName(name)
        setUser(res.user)
       
        history.push(url)
        handleUserInfoRegister(res.user.email);
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // ..
      })
      .finally(()=> {
        setIsLoading(false)
      })
}


    
const handleGoogleLogin = () => {
        signInWithGoogle()
          .then((res) => 
            {
              setIsLoading(true)
              setUser(res.user)
              history.push(url)
            }
              )
          .catch((err) => console.log(err))
          .finally(() => {
            setIsLoading(false)
          })
      };
    

    return (
       <div  className="text-center">
         <h3 className="py-4">Register Please</h3>
           <form onSubmit={handleRegistration}>
               <input type="text"  onBlur={handleGetName}placeholder="Name" className="form-control w-25 m-auto mb-3" />
               <input type="email" onBlur={handleGetEmail} placeholder="Email" className="form-control w-25 m-auto mb-3" />
               <input type="password"  onBlur={handleGetPassword} placeholder="Password" className="form-control w-25 m-auto mb-3" />
               <input type="submit" value="Register Now" placeholder="create" className="btn btn-primary px-5 py-2 mb-2" />
           </form>
           
           <button className="btn btn-warning px-5 py-2 mb-2" onClick={handleGoogleLogin}>Google Sign In</button>
           <p> Already Signed Up ?<Link to="/login">Please Login</Link ></p>
       </div>
    );
};

export default Register;