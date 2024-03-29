import React from "react";
import CountUp from "react-countup";

const ProductCount = () => {
  return (
    <div data-aos="fade-up">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center hover:bg-primary newsCard cursor-pointer shadow-2xl p-6">
            <div className="flex items-center justify-center w-12 h-12  mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <CountUp start={0} end={819} delay={10}>
              {({ countUpRef }) => (
                <div>
                  {/* <span /> */}
                  <h6
                    ref={countUpRef}
                    className="text-4xl font-bold text-deep-purple-accent-400"
                  >
                    819
                  </h6>
                </div>
              )}
            </CountUp>

            <p className="mb-2 font-bold text-md">Visitors</p>
            <p className="text-gray-700">
              It’s something that’s many of the wisest people in history have
              kept in mind.
            </p>
          </div>
          <div className="text-center hover:bg-primary newsCard cursor-pointer shadow-2xl p-6">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <CountUp start={0} end={1300} delay={10}>
              {({ countUpRef }) => (
                <div>
                  {/* <span /> */}
                  <h6
                    ref={countUpRef}
                    className="text-4xl font-bold text-deep-purple-accent-400"
                  >
                    1300
                  </h6>
                </div>
              )}
            </CountUp>
            <p className="mb-2 font-bold text-md">Buyer</p>
            <p className="text-gray-700">
              For many men, the acquisition of wealth does not end their
              troubles, it only changes them.
            </p>
          </div>
          <div className="text-center hover:bg-primary newsCard cursor-pointer  shadow-2xl p-6">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <CountUp start={0} end={91} delay={10}>
              {({ countUpRef }) => (
                <div>
                  {/* <span /> */}
                  <h6
                    ref={countUpRef}
                    className="text-4xl font-bold text-deep-purple-accent-400"
                  >
                    91
                  </h6>
                </div>
              )}
            </CountUp>
            <p className="mb-2 font-bold text-md">Sellers</p>
            <p className="text-gray-700">
              It's a helluva start, being able to recognize what makes you happy
              today, in this moment.
            </p>
          </div>
          <div className="text-center hover:bg-primary newsCard cursor-pointer  shadow-2xl p-6">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-primary sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <CountUp start={0} end={52} delay={10}>
              {({ countUpRef }) => (
                <div>
                  {/* <span /> */}
                  <h6
                    ref={countUpRef}
                    className="text-4xl font-bold text-deep-purple-accent-400"
                  >
                    52
                  </h6>
                </div>
              )}
            </CountUp>
            <p className="mb-2 font-bold text-md">Products</p>
            <p className="text-gray-700">
              Happiness is when what you think, what you say, and what you do
              are in harmony.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCount;
