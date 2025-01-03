import { TfiStatsUp } from "react-icons/tfi";
import { useEffect, useState } from "react";
import useFetchRecipes from "../hooks/useFetchRecipes";
export default function Hero() {
  const { recipes } = useFetchRecipes();

  return (
    <div className="carousel w-full h-[35rem]">
      {recipes.map((recipe, i) => {
        return (
          <div
            key={recipe.id}
            id={`slide${i}`}
            className="carousel-item relative w-full"
          >
            <img
              src={recipe.image}
              className="w-full object-center object-cover"
            />
            <div className="absolute bg-black/25 inset-0 flex flex-col items-center justify-center">
              <div className="bg-base-100 flex items-center justify-center flex-col text-center p-8 gap-4 rounded-md shadow-lg">
                <span className="flex items-center gap-2">
                  <TfiStatsUp className="size-6" />
                  85% would make this again
                </span>
                <h1 className="text-5xl tracking-wider pb-4 font-lobster">
                  {recipe.name}
                </h1>
                <p className="text-lg leading-relaxed max-w-[60ch] text-black/60 text-pretty">
                  Pizza Margherita is basically a Neapolitan pizza, typically
                  made with tomatoes, mozzarella cheese, garlic, fresh basil,
                  and extra-virgin olive oil. I think of it as a sophisticated
                  version of basic cheese pizza and also a wonderful Caprese
                  salad, but with a crust. It’s so easy to make!
                </p>
              </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${2 - i}`} className="btn btn-circle btn-sm">
                ❮
              </a>
              <a href={`#slide${i + 1}`} className="btn btn-circle btn-sm">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
