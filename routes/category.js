import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload, remoteUpload } from "../middlewares/uploaad.js";



// Create a router
const categoryRouter = Router();

// Define routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', remoteUpload.single('image'), postCategory)


// Export router
export default categoryRouter;