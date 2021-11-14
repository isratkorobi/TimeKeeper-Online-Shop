import React, { useEffect, useState } from "react";
import "./AllReviews.css";
import Rating from 'react-rating';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://serene-cove-68348.herokuapp.com/allReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="text-center rvw" style={{background: "#F7F7F7"}}>
      <h1 className="pb-2">Reviews</h1>
      <div className="line"></div>
      <div className="review">
        <div className="container">
          <div className="row">
            {reviews.map(pd => {
              return (
                <div className="col-md-4">
                <div className="review-des p-4 mb-3">
                  <p>{pd.description}</p>
                  <h4 className="text-uppercase rname">{pd.name}</h4>
                  <p className="text-capitalize">{pd.dscg}</p>
                  <Rating 
                    initialRating={pd.star} 
                    readonly
                    emptySymbol={<i class="far fa-star"></i>}
                    fullSymbol= {<i class="fas fa-star"></i>}
                  />
                </div>
              </div>
              )
            }
              
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllReviews;
