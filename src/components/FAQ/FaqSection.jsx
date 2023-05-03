// eslint-disable-next-line no-unused-vars
import React from "react";

const FaqSection = () => {
  return (
    <div className="bg-blue-400 p-2">
      <h1 className="text-xl font-bold text-gray-800">
        Frequently asked questions:
      </h1>
      <div className="collapse border-solid border-2 border-gray-600 my-1">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-pink-400 peer-checked:text-secondary-content">
          How much do chefs typically make?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            The salary for chefs varies depending on factors such as experience,
            location, and type of establishment. According to the Bureau of
            Labor Statistics, the median annual wage for chefs and head cooks
            was $51,530 in May 2020.
          </p>
        </div>
      </div>
      <div className="collapse border-solid border-2 border-gray-600 mb-1">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-pink-400 peer-checked:text-secondary-content">
          What kind of education do you need to become a chef?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            While a formal culinary education is not always required, many chefs
            attend culinary school to gain the necessary skills and knowledge.
            Experience working in a kitchen is also important.
          </p>
        </div>
      </div>
      <div className="collapse border-solid border-2 border-gray-600 mb-1">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-pink-400 peer-checked:text-secondary-content">
          What are the different types of chefs?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            There are many types of chefs, including executive chefs, sous
            chefs, pastry chefs, and line cooks. Each has their own role and
            responsibilities in a kitchen.
          </p>
        </div>
      </div>
      <div className="collapse border-solid border-2 border-gray-600 mb-1">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-pink-400 peer-checked:text-secondary-content">
          Is organic food better than non-organic food?
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Organic food is grown without synthetic pesticides and fertilizers,
            which may be healthier for both people and the environment. However,
            there is still debate among experts about whether or not organic
            food is significantly better than non-organic food.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
