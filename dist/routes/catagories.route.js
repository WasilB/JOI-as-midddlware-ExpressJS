"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const categories_controller_1 = require("../controller/categories.controller");
const categories_validator_1 = require("../validators/categories.validator");
const categoryRouter = express.Router();
const categoriesController = new categories_controller_1.CategoriesController();
categoryRouter.post("/create", categories_validator_1.default, categoriesController.createCategory);
categoryRouter.put("/update", categories_validator_1.default, categoriesController.updateCategory);
categoryRouter.delete("/delete", categoriesController.deleteCategoryById);
categoryRouter.get("/:id", categoriesController.getCategoryById);
categoryRouter.get("/", categoriesController.getAllCategories);
exports.default = categoryRouter;
//# sourceMappingURL=catagories.route.js.map