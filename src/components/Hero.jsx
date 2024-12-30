import { TfiStatsUp } from "react-icons/tfi";
import { useEffect, useState } from "react";
export default function Hero() {
  const [topRecipes, setTopRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch("https://dummyjson.com/recipes?limit=3");
      const data = await response.json();
      setTopRecipes(data.recipes);
    }
    fetchRecipes();
  }, []);
  return (
    <div className="carousel w-full h-[35rem]">
      {topRecipes.map((recipe, i) => {
        console.log(recipe);
        return (
          <div id={`slide${i}`} className="carousel-item relative w-full">
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
                <h1 className="text-5xl font-extrabold pb-4">{recipe.name}</h1>
                <p className="text-lg leading-relaxed max-w-[60ch] text-black/60 text-pretty">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  iste tempore, cupiditate ea id similique optio quis unde,
                  natus vitae, praesentium earum suscipit odit molestiae eos!
                  Blanditiis possimus culpa aperiam officia! Ad omnis soluta
                  laudantium.
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
