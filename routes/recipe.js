import { Router } from "express";
import { deleteRecipe, getRecipes, getrecipe, patchRecipe, postRecipe } from "../controllers/recipe.js";


// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes',getRecipes);

recipeRouter.post('/recipes', postRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getrecipe)

// Export router
export default recipeRouter;