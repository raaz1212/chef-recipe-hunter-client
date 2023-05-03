// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const chef = useLoaderData();

  const [favorites, setFavorites] = useState(
    new Array(chef.recipes.length).fill(false)
  );

  const handleFavoriteClick = (index) => {
    setFavorites(
      favorites.map((favorite, i) => (i === index ? !favorite : favorite))
    );
    toast.success(
      `${chef.recipes[index].recipe_name} has been added to your favorites!`
    );
  };

  return (
    <div className="p-10 bg-slate-700">
      <section className="flex items-center space-x-4 mb-8 bg-gray-900 p-6">
        <img
          src={chef.chef_picture}
          alt={chef.chef_name}
          className="w-48 h-48 rounded-full object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold text-fuchsia-800">
            {chef.chef_name}
          </h1>
          <p>{chef.bio}</p>
          <div className="flex items-center mt-4">
            <span className="text-gray-500 mr-2">{chef.likes} Likes</span>
            <span className="text-gray-500 mr-2">
              {chef.recipes.length} Recipes
            </span>
            <span className="text-gray-500">
              {chef.years_of_experience} Years of Experience
            </span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {chef.recipes.map((recipe, index) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden p-1"
          >
            <div className="p-4">
              <h2 className="font-bold text-fuchsia-800 text-xl mb-2">
                Recipe: {recipe.recipe_name}
              </h2>
              <ul className="list-disc pl-4 mb-2">
                <li>{recipe.ingredients[0]}</li>
                <li>{recipe.ingredients[1]}</li>
                <li>{recipe.ingredients[2]}</li>
                <li>{recipe.ingredients[3]}</li>
                <li>{recipe.ingredients[4]}</li>
              </ul>
              <p className="text-gray-600">
                <span className="font-bold underline">How to Cook:</span>{" "}
                {recipe.cooking_method}
              </p>
              <div className="flex items-center mt-4">
                <span className="text-yellow-500 mr-2">
                  {recipe.rating}/5.0
                </span>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => handleFavoriteClick(index)}
                  disabled={favorites[index]}
                >
                  {favorites[index] ? (
                    <FontAwesomeIcon icon={faHeart} color="red" />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ChefRecipes;
