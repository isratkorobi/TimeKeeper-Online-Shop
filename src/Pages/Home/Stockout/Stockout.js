import React from 'react';
import './Stockout.css';

const Stockout = () => {
    return (
        <div>
            <div className="py-5">
                <div className="container">
                        <h3 className="my-4 text-center text-uppercase" style={{fontWeight: "600"}}>New Arrival</h3>
                        <div className="line"></div>
                    <div className="row mt-5">
                        <div className="col-md-6 mb-5">
                            <a href=""><img src="https://i.ibb.co/WBRZ8sr/f1-min.jpg" /></a>
                        </div>
                        <div className="col-md-6 mb-5">
                            <a href=""><img src="https://i.ibb.co/PC5zL23/f2-min.jpg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stockout;