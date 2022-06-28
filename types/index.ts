export type Ingredient = {
  id: number;
  aisle: string;
  amount: number;
  image: string;
  meta: any[];
  name: string;
  original: string;
  originalName: string;
  unit: string;
  unitLong: string;
  unitShort: string;
};

export type Recipe = {
  id: number;
  image: string;
  imageType: string;
  likes: number;
  missedIngredientCount: number;
  missedIngredients: Ingredient[];
  title: string;
  unusedIngredients: Ingredient[];
  usedIngredientsCount: number;
  usedIngredients: Ingredient[];
};

export type Nutrient = {
  amount: number;
  name: string;
  unit: string;
};
