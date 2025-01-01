import { useState, useEffect } from "react";
import { TfiStatsUp } from "react-icons/tfi";
import { LuClock } from "react-icons/lu";
import useFetchRecipes from "../hooks/useFetchRecipes";
import { IoStar } from "react-icons/io5";
import { IoFlagOutline } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import RecipeCard from "./RecipeCard";
import { IoCalendarOutline } from "react-icons/io5";
export default function LatestRecipes() {
  const { recipes } = useFetchRecipes(6);
  return (
    <section className=" pt-32 pb-16 container mx-auto px-2">
      <h2 className="font-lobster tracking-wider text-4xl font-bold drop-shadow-md text-center flex items-center gap-3 justify-center pb-14">
        <IoCalendarOutline /> Our Latest Recipes
      </h2>
      <div className="grid grid-cols-3 gap-5">
        {recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} recipe={recipe} />;
        })}
      </div>
      <div className="flex items-center justify-center pt-14">
        <button className="btn btn-outline">
          View All <IoChevronForward className="size-6" />{" "}
        </button>
      </div>
    </section>
  );
}
