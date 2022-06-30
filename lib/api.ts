export const fetchRecipes = async (searchQuery: string) => {
  const resultsResponse = await fetch(
    `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchQuery}&number=100&ranking=2&ignorePantry=true&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const results = await resultsResponse.json();
  return results;
};

export const fetchRecipe = async (id: string) => {
  const resultResponse = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
  );
  const result = await resultResponse.json();

  return result;
};
