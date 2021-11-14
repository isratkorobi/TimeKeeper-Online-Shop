import React from 'react';
import AllReviews from '../AllReviews/AllReviews';
// import Appbar from '../Appbar/Appbar';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import Stockout from '../Stockout/Stockout';

const Home = () => {
    return (
        <div>
            {/* <Appbar></Appbar> */}
            <Banner></Banner>
            <Services></Services>
            <AllReviews></AllReviews>
            <Stockout></Stockout>
            <Footer></Footer>
        </div>
    );
};

export default Home;