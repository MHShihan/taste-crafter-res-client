import SectionTitle from "../../components/sectionTitle/SectionTitle";
import featuredImg from "../../assets/home/featured.jpg";
import { useState } from "react";
import "./Featured.css";

const Featured = () => {
  const [showText, setShowText] = useState(false);
  const text =
    "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusanda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusanda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusanda Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusanda.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ";
  const displayText = showText ? text : text.split(" ").slice(0, 50).join(" ");
  const handleShowText = () => {
    setShowText(!showText);
  };
  return (
    <div className={"mt-24 mb-12 pt-10 featured relative bg-fixed"}>
      <div className=" absolute bg-black inset-0 bg-opacity-30 "></div>

      <SectionTitle
        heading={"Featured Item"}
        subheading={"Check it out"}
      ></SectionTitle>

      <div className="flex flex-col lg:flex-row gap-10 px-4 lg:px-32 pb-24 pt-4 justify-center items-center z-50 bg-slate-500 bg-opacity-30 ">
        <div className="w-full lg:w-1/2 z-10">
          <img src={featuredImg} alt="" />
        </div>
        <div className="w-full lg:w-1/2 space-y-2 text-base-100  z-50">
          <p className="uppercase text-lg font-inter">March 20, 2023</p>
          <h3 className="uppercase text-xl  font-inter">
            Where can I get some?
          </h3>
          <p className="text-base-200 text-justify">{displayText}</p>
          <button
            onClick={handleShowText}
            className="btn text-white font-medium hover:text-gray-800 text-xl bg-transparent border-0 border-b-2 "
          >
            {showText ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
