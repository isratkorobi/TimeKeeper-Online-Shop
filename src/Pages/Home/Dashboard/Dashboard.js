// import React, { useEffect, useState } from "react";
// import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

// import "./Dashboard.css";
// // import AddServices from "./../AddServices/AddServices";
// import Review from "./../Review/Review";
// // import MyBookings from "./../MyBookings/MyBookings";
// // import MakeAdmin from "./../MakeAdmin/MakeAdmin";
// // import ManageServices from "./../ManageServices/ManageServices";
// import useAuth from "../../../Hooks/useAuth";

// const Dashbaord = () => {
//   let { path, url } = useRouteMatch();
//   const { user } = useAuth();
//   const [isAdmi, setIsAdmin] = useState(false);

//   useEffect(() => {
//     fetch(`https://serene-cove-68348.herokuapp.com/checkAdmin/${user?.email}`)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data[0]?.role === "admin") {
//           setIsAdmin(true);
//         } else {
//           setIsAdmin(false);
//         }
//       });
//   }, [user?.email]);
//   console.log(isAdmi);
//   return (
//     <div>
//       <div className="dashboard-container ">
//         <div className="row">
//           <div className="col-md-3 ">
//             <div className="dashboard">
//               <h5>Dashboard</h5>
//               <Link to={`${url}`}>
//                 <li className="dashboard-menu mt-5">Book</li>
//               </Link>

//               {/* <Link to={`${url}/BookingList`}>
//                 <li className="dashboard-menu mt-5">Booking list</li>
//               </Link> */}

//               <Link to={`${url}/review`}>
//                 <li className="dashboard-menu mt-5">Review</li>
//               </Link>
//               <div className="admin-dashboard">
//                 <li className="dashboard-menu mt-5">Orders list</li>

//                 {/* {isAdmi && (
//                   <Link to={`${url}/addService`}>
//                     <li className="dashboard-menu">Add Service</li>
//                   </Link>
//                 )} */}
//                 {/* <Link to={`${url}/makeAdmin`}>
//                   <li className="dashboard-menu">Make Admin</li>
//                 </Link> */}
//                 {/* <Link to={`${url}/manageServices`}>
//                   <li className="dashboard-menu">Manage Service</li>
//                 </Link> */}
//               </div>
//             </div>
//           </div>
//           <div className="col-md-9">
//             {/* <Switch>
//               <Route exact path={path}>
//                 <MyBookings></MyBookings>
//               </Route>
//               <Route exact path={`${path}/review`}>
//                 <Review></Review>
//               </Route>
//               {/* <Route exact path={`${path}/BookingList`}>
//                 <MyBookings></MyBookings>
//               </Route> */}
//               {/* <Route exact path={`${path}/makeAdmin`}>
//                 <MakeAdmin></MakeAdmin>
//               </Route>
//               <Route exact path={`${path}/addService`}>
//                 <AddServices></AddServices>
//               </Route>
//               {/* <Route exact path={`${path}/manageServices`}>
//                 <ManageServices></ManageServices>
//               </Route> */}
//             {/* </Switch>  */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashbaord;

import React,{useEffect,useState} from 'react';
import { Switch, useRouteMatch, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Review from './../Review/Review';
import MyBooking from './../MyBooking/MyBooking';
import AddProduct from './../AddProduct/AddProduct'
import './Dashboard.css';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import Pay from '../Pay/Pay';
import './Dashboard.css';

const Dashboard = () => {
    const {user,logOut } = useAuth();
    let {path, url} = useRouteMatch();
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch(`https://serene-cove-68348.herokuapp.com/checkAdmin/${user.email}`)
        .then((res)=> res.json())
        .then((data) => {
            if (data[0]?.role === "admin") {
              setIsAdmin(true);
            } else {
              setIsAdmin(false);
            }
          }); 
    }, [user?.email]);
    console.log(isAdmin);
    return (
        <div>
            <div className="container">
            <h4 className="text-center py-5 fw-bold">Dashboard</h4>
            
            <div className="row">
                
                <div className="col-md-3 adminbar">
                    <div className="dashboard">   
                        <Link to={`${url}/Review`}>
                            <li className="dashboard-menu list-unstyled">Review</li>
                        </Link>
                        <Link to={`${url}/Mybooking`}>
                            <li className="dashboard-menu mt-3 list-unstyled">My Orders</li>
                        </Link>
                        {isAdmin && <Link to={`${url}/addproduct`}>
                            <li className="dashboard-menu mt-3 list-unstyled">Add A Product</li>
                        </Link>}
                        {isAdmin && <Link to={`${url}/makeAdmin`}>
                            <li className="dashboard-menu mt-3 list-unstyled">Make Admin</li>
                        </Link>}
                         {isAdmin && <Link to={`${url}/manageOrders`}>
                            <li className="dashboard-menu mt-3 list-unstyled">Manage All Orders</li>
                        </Link>}
                       {isAdmin && <Link to={`${url}/manageProducts`}>
                            <li className="dashboard-menu mt-3 list-unstyled">Manage Products</li>
                        </Link>}
                        <Link to={`${url}/pay`}>
                            <li className="dashboard-menu my-3 list-unstyled">Pay</li>
                        </Link>
                        <Link to={`${url}/Signout`}>
                        <button className="abtn" onClick={logOut}> Sign Out</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-9">
                    <Switch>
                        <Route exact path={`${path}/Mybooking`}>
                           <MyBooking></MyBooking>
                        </Route>
                         <Route exact path={`${path}/Review`}>
                            <Review></Review>
                        </Route>
                        <Route exact path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </Route>
                        <Route exact path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route exact path={`${path}/manageOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route exact path={`${path}/manageProducts`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                        <Route exact path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                    </Switch>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;