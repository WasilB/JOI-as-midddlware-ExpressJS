import { Request, Response } from "express";
import { Category } from "../entity/categories";
import { Double, getManager } from "typeorm";

export class CategoriesController {
  async getAllCategories(req: Request, res: Response) {
    try {
      const categoryRepository = getManager().getRepository(Category);
      const category = await categoryRepository.find();

      res.status(200).json({
        Success: true,
        Data: category,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async getCategoryById(req: Request, res: Response) {
    try {
      const categoryRepository = getManager().getRepository(Category);
      const category = await categoryRepository.findOne({
        id: req.params.id,
      });
      res.status(200).json({
        Success: true,
        Data: category,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async deleteCategoryById(req: Request, res: Response) {
    try {
      const categoryRepository = getManager().getRepository(Category);
      const category = await categoryRepository.delete({
        id: req.query.id,
      });

      res.status(200).json({
        Success: true,
        Data: category,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async createCategory(req: Request, res: Response) {
    try {
      console.log("create ", req.body);
      const categoryRepository = getManager().getRepository(Category);
      const category = await categoryRepository.save(req.body);

      res.status(200).json({
        Success: true,
        Data: category,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async updateCategory(req: Request, res: Response) {
    try {
      console.log("update body ", req.body);
      console.log("update query ", req.query);

      const categoryRepository = getManager().getRepository(Category);
      const category = await categoryRepository.update(
        { id: req.query.id },
        req.body
      );
      res.status(200).json({
        Success: true,
        Data: category,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }
}
