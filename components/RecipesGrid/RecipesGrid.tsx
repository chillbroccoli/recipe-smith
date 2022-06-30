import Link from "next/link";
import Image from "next/image";

import type { Recipe } from "@/types/index";

type RecipesGridProps = {
  recipes: Recipe[];
};

export default function RecipesGrid({ recipes }: RecipesGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 mt-2">
      {recipes.map((recipe: Recipe) => (
        <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
          <div className="w-full my-3 bg-teal-500/20 rounded-lg overflow-hidden cursor-pointer">
            <div className="relative w-full h-48">
              <Image
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full"
                layout="fill"
              />
            </div>

            <h2 className="p-4 text-sm tracking-tight">{recipe.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
