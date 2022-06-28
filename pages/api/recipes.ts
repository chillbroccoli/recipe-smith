import { fetchRecipes } from "@/lib/api";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const reqData = await req.body;
  const { searchQuery } = reqData;

  const recipes = await fetchRecipes(searchQuery);

  res.status(200).json(recipes);
}
