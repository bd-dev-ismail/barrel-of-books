import React from "react";
import books from "../../../assets/books.jpg";
const BuyAndSell = () => {
  return (
    <div>
      <div className="px-4 py-4 container  mx-auto md:px-24 lg:px-8 ">
        <h3 className="lg:text-3xl text-xl my-14  text-center lg:text-start uppercase font-bold">
          WHY CHOOSE The <span className="text-primary">Barrel of Books?</span>
          <hr className="w-[73px] border-b-4 border-primary m-3" />
        </h3>
        <div className="lg:flex justify-between">
          <div data-aos="fade-right" className="max-w-xl lg:max-w-screen-xl">
            <div className="mb-16 lg:max-w-lg lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 text-white py-px mb-4 text-xs font-semibold badge badge-primary">
                    Barrel Of Books
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 lg:text-5xl font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Buy & Sell Your Textbooks for the Best Price
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sometimes, you read a book and it fills you with this weird
                  evangelical zeal, and you become convinced that the shattered
                  world will never be put back together unless and until all
                  living humans read the book.
                </p>
              </div>
              <div className="flex items-center mt-5">
                <a
                  href="/blog"
                  className="inline-flex dropShadow items-center text-white justify-center h-12 px-6 mr-6 btn btn-primary"
                >
                  Our Blog
                </a>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex dropShadow items-center text-white font-semibold btn"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2  lg:items-end"
          >
            <img
              src={books}
              className="object-cover object-top w-full h-64 max-w-xl -mb-16 rounded shadow-2xl lg:ml-64 xl:ml-8 lg:-mb-24 xl:-mb-28 lg:h-auto lg:max-w-screen-md"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyAndSell;
