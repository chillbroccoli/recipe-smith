import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import type { GetServerSideProps } from "next";
import { Clock, User } from "tabler-icons-react";

import type { Ingredient } from "@/types/index";

import { fetchRecipe } from "@/lib/api";

import NutritionTable from "@/components/NutritionTable";

type RecipeDetailsProps = {
  details: any;
};

export default function RecipeDetails({ details }: RecipeDetailsProps) {
  const [showNutrition, setShowNutrition] = useState(false);

  return (
    <>
      <Head>
        <title>Recipe | {details.title}</title>
      </Head>
      <div className="bg-gradient-to-br from-green-500/20 via-emerald-500/20 to-teal-500/20">
        <div>
          <div className="relative w-full h-72">
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-teal-500/30"></div>
            <Image
              src={details.image}
              alt={details.title}
              className="w-full h-full"
              layout="fill"
            />
            <h2 className="absolute -bottom-6 lg:-bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 text-white/90 rounded-md bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-base lg:text-lg uppercase z-10">
              {details.title}
            </h2>
          </div>

          <div className="flex justify-center items-center pt-14">
            <div className="flex items-center text-base lg:text-lg">
              <Clock
                className="h-5 w-5 pr-1 text-teal-600"
                aria-hidden="true"
              />
              <span>{details.readyInMinutes} Minutes</span>
            </div>

            <div className="flex items-center ml-4 text-base lg:text-lg">
              <User className="h-5 w-5 pr-1 text-teal-600" aria-hidden="true" />
              <span>{details.servings} Servings</span>
            </div>
          </div>

          <div className="bg-white/60 flex flex-col justify-center items-center mt-6 py-4 lg:py-8 px-2">
            <h2 className="text-teal-500 text-base lg:text-lg uppercase pt-2 pb-4">
              Recipe Ingredients
            </h2>
            <ul className="w-3/4 mx-auto text-sm list-disc marker:text-teal-500 leading-8">
              {details.extendedIngredients?.length > 0 &&
                details.extendedIngredients
                  .filter((ingredient: Ingredient) => ingredient.id > 0)
                  .map((ingredient: Ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
            </ul>
          </div>

          {details.analyzedInstructions.length > 0 ? (
            <div className="flex flex-col justify-center items-center mt-2 lg:mt-6 py-4 px-2">
              <h2 className="text-teal-500 text-base lg:text-lg uppercase pt-2 pb-4">
                How To Cook
              </h2>
              <ol className="w-3/4 mx-auto text-sm list-decimal leading-8">
                {details.analyzedInstructions[0].steps.map((step: any) => (
                  <li key={step.number}>{step.step}</li>
                ))}
              </ol>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center mt-6 py-4 px-2">
              <p>Sorry, no cooking instructions were provided 😢</p>
            </div>
          )}

          <div className="flex flex-col justify-center items-center mt-6 py-4 px-2">
            <div>
              <div className="flex items-center h-5">
                <input
                  id="show_nutrition"
                  aria-describedby="show_nutrition-description"
                  name="show_nutrition"
                  type="checkbox"
                  className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300 rounded"
                  checked={showNutrition}
                  onChange={() => setShowNutrition(!showNutrition)}
                />
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="show_nutrition"
                    className="font-medium text-gray-700"
                  >
                    Show Nutrition Table
                  </label>
                </div>
              </div>
            </div>

            {showNutrition && (
              <NutritionTable nutrients={details.nutrition.nutrients} />
            )}
          </div>

          <div className="w-full bg-white/60 px-4 py-6 text-sm lg:text-base mt-6 flex items-center justify-center">
            <p>Credits: {details.creditsText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const details = await fetchRecipe(params?.id as string);

  return {
    props: {
      details,
    },
  };
};
