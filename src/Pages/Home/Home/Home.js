import React from 'react';
import Advetisement from '../Advetisement/Advetisement';
import Banner from '../Banner/Banner';
import BuyAndSell from '../BuyAndSell/BuyAndSell';
import CategoriesSection from '../CategoriesSection/CategoriesSection';

const Home = () => {
    return (
        <div>
           <Banner/>
           <Advetisement/>
           <CategoriesSection/>
           <BuyAndSell/>
        </div>
    );
};

export default Home;