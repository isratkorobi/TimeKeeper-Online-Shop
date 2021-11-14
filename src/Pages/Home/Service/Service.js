import React from "react";
import "./Service.css";
import { Link } from 'react-router-dom';
const Service = (props) => {
  const { title, description, price, name, img ,_id} = props?.service; //distructure array
  return (   
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="card mb-5" style={{ width: "25rem" }}>
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h3 className="product-name">{name}</h3>
                  <h5>{title}</h5>
                  <p>{description}</p>
                  <h4 className="fw-bold">${price}</h4>
                  <Link to={`/order/${_id}`}>
                    <button class="btn c-btn btn-sm ps-4 pe-4">Order Now</button>
                  </Link>
                </div>
              </div>
          </div>
        </div>

      </div> 
    </div>
  );
};

export default Service;