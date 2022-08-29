"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("../entity/categories");
const typeorm_1 = require("typeorm");
class CategoriesController {
    getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryRepository = typeorm_1.getManager().getRepository(categories_1.Category);
                const category = yield categoryRepository.find();
                res.status(200).json({
                    Success: true,
                    Data: category,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryRepository = typeorm_1.getManager().getRepository(categories_1.Category);
                const category = yield categoryRepository.findOne({
                    id: req.params.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: category,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
    deleteCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categoryRepository = typeorm_1.getManager().getRepository(categories_1.Category);
                const category = yield categoryRepository.delete({
                    id: req.query.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: category,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("create ", req.body);
                const categoryRepository = typeorm_1.getManager().getRepository(categories_1.Category);
                const category = yield categoryRepository.save(req.body);
                res.status(200).json({
                    Success: true,
                    Data: category,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("update body ", req.body);
                console.log("update query ", req.query);
                const categoryRepository = typeorm_1.getManager().getRepository(categories_1.Category);
                const category = yield categoryRepository.update({ id: req.query.id }, req.body);
                res.status(200).json({
                    Success: true,
                    Data: category,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
}
exports.CategoriesController = CategoriesController;
//# sourceMappingURL=categories.controller.js.map