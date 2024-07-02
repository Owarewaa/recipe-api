import { Router } from "express";
import {deleteRecipe, getRecipe, getRecipes,  patchRecipe,  postRecipe } from "../controllers/recipe.js";
import { localUpload } from "../middlewares/uploaad.js";


// Create router
const recipeRouter = Router();

// Define routes
recipeRouter.get('/recipes',getRecipes);

recipeRouter.post('/recipes', localUpload.single('image'), postRecipe);

recipeRouter.delete('/recipes/:id', deleteRecipe);

recipeRouter.get('/recipes/:id', getRecipe);

recipeRouter.patch('/recipes/:id', patchRecipe);

// Export router
export default recipeRouter;