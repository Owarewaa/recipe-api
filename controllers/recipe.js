import { RecipeModel } from "../models/recipe.js";

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

export const patchRecipe = (req, res) => {
    res.json(`Recipe with Id ${req.params.id} updated`);
}

export const deleteRecipe = async (req, res, next) => {
try {
    // Delete recipe by id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id)
    
        res.json(`Recipe with Id ${req.params.id} deleted`);
   } catch (error) { 
next (error)
   }

    
}

export const getrecipe = (req, res) => {
    res.json(`Recipe with Id ${req.params.id} selected`)
}
