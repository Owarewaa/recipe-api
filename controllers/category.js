import { CategoryModel } from "../models/category.js";


// Query is used for get all Http method
export const getCategories = async (req, res, next) => {
    try {
          // Get query params
          const {limit = 10, skip = 0, filter = "{}", fields = "{}"} = req.query;
        // Get all categories from database
        const allCategories = await CategoryModel
        .find(JSON.parse(filter))
        .select(JSON.parse(fields))
        .limit(parseInt(limit))
        .skip(parseInt(skip));
        // Return response
        res.status(200).json(allCategories);

    } catch (error) {
        next(error);
    }
}
// file upload is used in post and patch or put Http method
export const postCategory = async (req, res, next) => {
    try {
        // Add Category to database
        const newCategory = await CategoryModel.create({
            ...req.body,
            image: req.file.filename
        });
        // Return response
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
}