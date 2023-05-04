// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./tabularcard.css";

import LazyLoad from "react-lazy-load";

const ChefRecipes = () => {
  const chef = useLoaderData();
  console.log(chef);

  const [favorites, setFavorites] = useState(
    chef.recipes && Array.isArray(chef.recipes)
      ? new Array(chef.recipes.length).fill(false)
      : []
  );

  const handleFavoriteClick = (index) => {
    setFavorites(
      favorites.map((favorite, i) => (i === index ? !favorite : favorite))
    );
    toast.success(
      `${chef.recipes[index].recipe_name} has been added to your favorites!`
    );
  };

  // function to convert rating to star icons
  const getStarIcons = (rating) => {
    const roundedRating = Number(rating.toFixed(2));
    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((star, i) => (
          <FontAwesomeIcon icon={faStar} className="text-yellow-500" key={i} />
        ))}
        {hasHalfStar && (
          <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
        )}
        {[...Array(emptyStars)].map((star, i) => (
          <FontAwesomeIcon icon={farStar} className="text-yellow-500" key={i} />
        ))}
      </>
    );
  };

  return (
    <div className="p-10 bg-slate-700 my-4 py-4">
      <section className="flex items-center space-x-4 mb-8 bg-gray-900 p-6">
        <LazyLoad
          offset={300}
          threshold={0.95}
          onContentVisible={() => {
            console.log("loaded!");
          }}
        >
          <img
            src={chef.chef_picture}
            alt={chef.chef_name}
            className="w-48 h-48 rounded-full object-cover"
          />
        </LazyLoad>
        <div>
          <h1 className="text-4xl font-bold text-fuchsia-800">
            {chef.chef_name}
          </h1>
          <p>{chef.bio}</p>
          <div className="flex items-center mt-4 ">
            <span className="text-gray-500 mr-2 border border-dotted p-1">
              {chef.likes} Likes
            </span>
            <span className="text-gray-500 mr-2 border border-dotted p-1">
              {chef.recipes.length} Recipes
            </span>
            <span className="text-gray-500 border border-dotted p-1">
              {chef.years_of_experience} Years of Experience
            </span>
          </div>
        </div>
      </section>

      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-200 text-black font-bold border border-blue-400 mb-2">
            <th className="py-2 px-4">Recipe</th>
            <th className="py-2 px-4">Ingredients</th>
            <th className="py-2 px-4">Cooking Method</th>
            <th className="py-2 px-4">Stars</th>
            <th className="py-2 px-4">Favorite</th>
          </tr>
        </thead>
        <tbody>
          {chef.recipes.map((recipe, index) => (
            <tr key={recipe.id} className="border-2 border-pink-500 mt-4">
              <td className="border py-2 px-4">
                <h2 className="font-bold text-sky-100 text-lg mb-1">
                  {recipe.recipe_name}
                </h2>
              </td>
              <td className="border py-2 px-4">
                <ul className="list-disc pl-4">
                  <li>{recipe.ingredients[0]}</li>
                  <li>{recipe.ingredients[1]}</li>
                  <li>{recipe.ingredients[2]}</li>
                  <li>{recipe.ingredients[3]}</li>
                  <li>{recipe.ingredients[4]}</li>
                </ul>
              </td>
              <td className="border py-2 px-4">
                <p className="text-white">{recipe.cooking_method}</p>
              </td>
              <td className="border py-2 px-4">
                <div className="flex items-center">
                  {getStarIcons(recipe.rating)}
                </div>
              </td>
              <td className="border py-2 px-4">
                <button
                  className={`${
                    favorites[index]
                      ? "bg-red-500 hover:bg-red-700"
                      : "bg-blue-500 hover:bg-blue-700"
                  } text-white font-bold py-2 px-4 rounded-full`}
                  onClick={() => handleFavoriteClick(index)}
                  disabled={favorites[index]}
                >
                  {favorites[index] ? (
                    <FontAwesomeIcon icon={faHeart} color="white" />
                  ) : (
                    <FontAwesomeIcon icon={faHeart} />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default ChefRecipes;
