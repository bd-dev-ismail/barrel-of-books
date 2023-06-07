import React from "react";
import { Helmet } from "react-helmet";
import Advetisement from "../Advetisement/Advetisement";
import Banner from "../Banner/Banner";
import BuyAndSell from "../BuyAndSell/BuyAndSell";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import History from "../History/History";
import ProductCount from "./ProductCount/ProductCount";
import UpdatedCategoires from "../CategoriesSection/UpdatedCategoires";
import ClientSection from "../ClientSection/ClientSection";
import FaqSection from "../FaqSection/FaqSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home -Barrel Of Books</title>
      </Helmet>
      <Banner />
      <Advetisement />
      <CategoriesSection />
      {/* <UpdatedCategoires /> */}
      <BuyAndSell />
      <ProductCount />
      <FaqSection />
      <ClientSection />
      <History />
    </div>
  );
};

export default Home;
