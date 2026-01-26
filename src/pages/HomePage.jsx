import React from 'react';
import Hero from '../components/Home/Hero.jsx';
import Features from '../components/Home/Features.jsx';
import Vendors from '../components/Home/Vendors.jsx';
import Buyers from '../components/Home/Buyers.jsx';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Features />
            <Vendors />
            <Buyers />
        </>
    );
};

export default HomePage;
