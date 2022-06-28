import React, { useState } from "react";

import type { Recipe } from "@/types/index";

import useBreakpoints from "@/hooks/useBreakpoints";
import usePagination from "@/hooks/usePagination";

import SearchInput from "@/components/SearchInput";
import RecipesGrid from "@/components/RecipesGrid";
import Pagination from "@/components/Pagination";

export default function AppContainer() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { isSM } = useBreakpoints();
  const {
    currentItems: currentRecipes,
    currentPage,
    totalPages,
    goToNextPage,
    goToPreviousPage,
  } = usePagination<Recipe>({ items: recipes, itemsPerPage: isSM ? 5 : 10 });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const trimmedSearchQuery = searchQuery.replace(/\s/g, "");

    const response = await fetch(`/api/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        searchQuery: trimmedSearchQuery,
      }),
    });

    const results = await response.json();
    setRecipes(results);
  };

  return (
    <div>
      <div className="w-4/5 mx-auto">
        <div className="w-full py-4 px-4">
          <h1 className="logo-title text-center text-lg">Recipe Smith</h1>
        </div>

        <SearchInput
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          handleSubmit={handleSubmit}
        />

        <RecipesGrid recipes={currentRecipes} />

        {currentRecipes.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
          />
        )}
      </div>
    </div>
  );
}
