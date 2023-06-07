import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import dashboard from "../../assets/dashboard.webp";
import aos from "aos";
const Dashboard = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Dashboard -Barrel Of Books</title>
      </Helmet>
      <div className="lg:flex justify-center  items-center my-15">
        <div data-aos="fade-right">
          <h3 className="text-5xl mt-10 lg:mt-0 mb-32 lg:mb-0 capitalize font-bold text-center lg:text-start">
            Welcome to your <br />{" "}
            <span className="text-primary">dashboard</span>{" "}
          </h3>
        </div>
        <div data-aos="fade-left">
          <img src={dashboard} alt="" className="w-full lg:w-[800px] h-full" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
