import React from 'react';
import { Helmet } from 'react-helmet';
import Advetisement from '../Advetisement/Advetisement';
import Banner from '../Banner/Banner';
import BuyAndSell from '../BuyAndSell/BuyAndSell';
import CategoriesSection from '../CategoriesSection/CategoriesSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home -Barrel Of Books</title>
            </Helmet>
           <Banner/>
           <Advetisement/>
           <CategoriesSection/>
           <BuyAndSell/>
        </div>
    );
};

export default Home;