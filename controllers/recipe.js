import { RecipeModel } from "../models/recipe.js";


// GET ALL
export const getRecipes = async (req, res, next) => {
    try {
        // Get all recipes from database
        const allRecipes = await RecipeModel.find();
        // Return all recipes as response
        res.json(allRecipes);
    } catch (error) {
        next(error)
    }
}

// ADD 
export const postRecipe = async (req, res, next) => {
    try {
        // Add recipe to database
        const newRecipe = await RecipeModel.create(req.body);
        // Return response
        res.json('Recipe added')
    } catch (error) {
        next(error)
    }

}


// DELETE ONE
export const deleteRecipe = async (req, res, next) => {
try {
    // Delete recipe by id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id)
    
        res.json(`Recipe with Id ${req.params.id} deleted`);
   } catch (error) { 
next (error)
   }

    
}
// GET ONE
export const getRecipe = async(req, res, next) => {
    try {
        const recipe = await RecipeModel.findById(req.params.id);
        res.json(recipe)
    } catch (error) {
        next(error)
    }
}

// PATCH (But i am not done)
export const patchRecipe = async (req,res, next) => {
   try {
    // Update recipe by ID
const updatedRecipe = await RecipeModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
// Return response
res.json(updatedRecipe);
   } catch (error) {
    next(error)
   }
 }