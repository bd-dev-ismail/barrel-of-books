import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay } from "swiper";
import { Pagination } from "swiper";
import banner1 from "../../../assets/banner1.webp";
import banner2 from "../../../assets/banner2.webp";

import { Link } from "react-router-dom";
const Banner = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        pagination={true}
        slidesPerView={1}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay
      >
        <SwiperSlide>
          <div
            className="hero lg:h-[65vh] h-[50vh]"
            style={{
              backgroundImage: `url(${banner1})`,
            }}
          >
            
            <div className="container mx-auto">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
                <div className="max-w-md">
                  <h1 className="mb-5 lg:text-7xl text-5xl font-bold">
                    Fashion <br /> Changing <br /> Always
                  </h1>

                  <Link to="/shop">
                    <button className="btn btn-primary">Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero lg:h-[65vh] h-[50vh]"
            style={{
              backgroundImage: `url(${banner2})`,
            }}
          >
            
            <div className="container mx-auto">
              <div className=" absolute flex justify-start transform -translate-y-1/2 left-30 top-1/2 text-white">
                <div className="max-w-md">
                  <h1 className="mb-5 lg:text-7xl text-5xl font-bold">
                    Fashion <br /> Changing <br /> Always
                  </h1>

                  <Link to="/shop">
                    <button className="btn btn-primary">Shop Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Banner;
