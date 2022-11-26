import React from 'react';
import dashboard from '../../assets/dashboard.webp'
const Dashboard = () => {
    return (
      <div>
        <div className="lg:flex justify-center  items-center my-15">
          <div>
            <h3 className="text-5xl mb-20 lg:mb-0 capitalize font-bold text-center lg:text-start">
              Welcome to your <br /> <span className='text-primary'>dashboard</span>{" "}
            </h3>
          </div>
          <div>
            <img
              src={dashboard}
              alt=""
              className="w-full lg:w-[800px] h-full"
            />
          </div>
        </div>
      </div>
    );
};

export default Dashboard;