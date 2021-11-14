import React from "react";
import { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./ExploreProducts.css";
const ExploreProducts = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://serene-cove-68348.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-5 service pt-3 text-center mb-5">
      <h4>SUPER ATTRACTIVE</h4>
      <h1>Super Deal</h1>

      <div className="service-container">
        {services.map((service) => (
          <Service key={service?.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default ExploreProducts;
