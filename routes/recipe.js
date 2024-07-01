import { Router } from "express";
import {deleteRecipe, getRecipe, getRecipes,  patchRecipe,  postRecipe } from "../controllers/recipe.js";


// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes',getRecipes);

recipeRouter.post('/recipes', postRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);

// Export router
export default recipeRouter;