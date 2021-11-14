import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AddProduct from "./Pages/Home/AddProduct/AddProduct";
import Appbar from "./Pages/Home/Appbar/Appbar";
import Dashboard from "./Pages/Home/Dashboard/Dashboard";
import ExploreProducts from "./Pages/Home/ExploreProducts/ExploreProducts";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login";
import MyBooking from "./Pages/Home/MyBooking/MyBooking";
import Order from "./Pages/Home/Order/Order";
import PrivateRoute from "./Pages/Home/PrivateRoute/PrivateRoute";
import Register from "./Pages/Home/Register/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Appbar></Appbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
            <Route path="/explore">
              <ExploreProducts></ExploreProducts>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <PrivateRoute path="/order/:itemId">
              <Order></Order>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
