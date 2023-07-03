import { meals } from "./meals";
import { Meal } from "./types";

export const recommendMeal = (): Meal => {
  const randomIndex = Math.floor(Math.random() * meals.length);
  return meals[randomIndex];
};
