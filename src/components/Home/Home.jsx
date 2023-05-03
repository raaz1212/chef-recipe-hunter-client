// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import About from "../About/AboutMe";
import ImageSliderBanner from "../Banner/Banner";
import ChefSection from "../Chef/ChefSection";
import FaqSection from "../FAQ/FaqSection";
import QuoteCard from "../Quote/Quote";

const Home = () => {
  useEffect(() => {
    document.title = "CheFood";
  }, []);
  return (
    <div>
      <ImageSliderBanner />
      <ChefSection />
      <div className="sm:grid sm:grid-cols-1 md:grid-cols-5">
        <div className="md:col-span-3">
          <FaqSection />
        </div>
        <div className="md:col-span-2">
          <QuoteCard />
        </div>
      </div>
      <About />
    </div>
  );
};

export default Home;
