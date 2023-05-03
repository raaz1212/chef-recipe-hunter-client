// eslint-disable-next-line no-unused-vars
import React from "react";
import classNames from "classnames";
import BannerImage from "../../assets/male-chef-with-apron-chopping-vegetables.jpg";

function Banner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-300 via-purple-500 to-pink-300 py-20">
      <div className="container flex flex-col justify-center items-center md:flex-row md:space-x-8">
        <div className="max-w-md w-full text-center md:text-left md:pr-8 lg:pr-16">
          <h1 className="text-4xl font-bold text-white mb-8">
            Welcome to my website!
          </h1>
          <p className="text-xl text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            faucibus mauris vitae consequat sagittis. Sed ac tellus mauris.
          </p>
        </div>
        <div
          className={classNames(
            "flex items-center justify-center mt-10 md:mt-0",
            "md:absolute md:inset-y-0 md:right-0 md:w-1/2"
          )}
        >
          <img
            className={classNames(
              "max-w-xs w-full",
              "md:max-w-md",
              "md:h-auto"
            )}
            src={BannerImage}
            alt="Banner Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
