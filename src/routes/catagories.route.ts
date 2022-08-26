import * as express from "express";
import { CategoriesController } from "../controller/categories.controller";
import categoriesValidator from "../validators/categories.validator";

const categoryRouter = express.Router();
const categoriesController = new CategoriesController();

categoryRouter.post(
  "/crete",
  categoriesValidator,
  categoriesController.createCategory
);
categoryRouter.put(
  "/update",
  categoriesValidator,
  categoriesController.updateCategory
);
categoryRouter.delete("/delete", categoriesController.deleteCategoryById);
categoryRouter.get("/:id", categoriesController.getCategoryById);
categoryRouter.get("/", categoriesController.getAllCategories);

export default categoryRouter;
