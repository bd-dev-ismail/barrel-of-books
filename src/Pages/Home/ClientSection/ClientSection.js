import React from "react";
import img1 from "../../../assets/client-1.png";
import img2 from "../../../assets/client-2.png";
import img3 from "../../../assets/client-3.png";
import img4 from "../../../assets/client-4.png";
import img5 from "../../../assets/client-5.png";
import img6 from "../../../assets/client-6.png";
import img7 from "../../../assets/client-7.png";
const ClientSection = () => {
  return (
    <div className="bg-primary newsCard cursor-pointer">
      <div
        data-aos="fade-down"
        className=" grid grid-cols-2 py-5 md:grid-cols-4 lg:grid-cols-7  gap-5 container mx-auto md:px-24 px-4 lg:px-8 my-24"
      >
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>

        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img6} alt="" />
        </div>
        <div>
          <img src={img7} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
