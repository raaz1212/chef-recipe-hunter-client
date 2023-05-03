// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ChefSection = () => {
  const chefs = useLoaderData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-300 p-10">
      {chefs.map((chef) => (
        <section
          className="bg-white rounded-lg shadow-lg overflow-hidden p-1"
          key={chef.id}
        >
          <img
            src={chef.chef_picture}
            alt={chef.chef_name}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="ps-4">
            <h2 className="text-center text-xl font-semibold text-fuchsia-800 mb-2">
              {chef.chef_name}
            </h2>
            <h2 className="text-slate-700">
              Years of experience: {chef.years_of_experience}
            </h2>
            <h2 className="text-slate-700">
              Numbers of recipes: {chef.recipes.length}
            </h2>
            <h2 className="text-slate-700">Likes: {chef.likes}</h2>
            <Link className="flex justify-end" to={`/${chef.id}`}>
              <button className="bg-pink-400 hover:bg-pink-700 text-white font-semibold py-1 px-2 rounded-full my-2">
                View Recipes
              </button>
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ChefSection;
