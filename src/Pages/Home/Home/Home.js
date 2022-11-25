import React from 'react';
import Advetisement from '../Advetisement/Advetisement';
import Banner from '../Banner/Banner';
import CategoriesSection from '../CategoriesSection/CategoriesSection';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Advetisement/>
           <CategoriesSection/>
        </div>
    );
};

export default Home;