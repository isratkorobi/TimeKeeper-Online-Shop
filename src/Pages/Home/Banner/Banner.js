import Button from "@restart/ui/esm/Button";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="banner-content">
                <h1 className="fw-bold py-3">INCOMPARABLE TIME PIECES</h1>
                <p className="pt-2 pb-4">
                  Even the all powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life One day however a
                  small line of blind text by the name .
                </p>
                <button type="button" className="btn btn-custom py-2 px-4">View More</button>
              </div>
            </div>
            <div className="col-md-6">
              <div className="imgBg">
                <img
                  src="https://i.ibb.co/fqRqP91/WATCH-768x768.png"
                  className="banner-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
