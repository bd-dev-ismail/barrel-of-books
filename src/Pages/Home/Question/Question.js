import React from "react";

const Question = () => {
  return (
    <div className="bg-primary  ">
      <div className="flex justify-between items-center px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div data-aos="fade-right" className="text-white">
          <h3 className="lg:text-3xl text-xl my-3 text-center lg:text-start uppercase font-bold">
            Do You Have Questions ?
          </h3>
          <p>We'll Help You To Grow Your Career And Growth.</p>
        </div>
        <div data-aos="fade-left">
          <button
            style={{
              padding: "16px 40px",
            }}
            className="bg-white dropShadow font-semibold rounded-full"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
