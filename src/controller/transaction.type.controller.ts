import { Request, Response } from "express";
import { TransactionType } from "../entity/transaction.type";
import {
  Double,
  getManager,
  UsingJoinTableOnlyOnOneSideAllowedError,
} from "typeorm";

export class TransactionTypeController {
  async getAllTransactiontypes(req: Request, res: Response) {
    try {
      const transactionTypeRepository =
        getManager().getRepository(TransactionType);
      const transactionTypes = await transactionTypeRepository.find();

      res.status(200).json({
        Success: true,
        Data: transactionTypes,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async getTransactiontypeById(req: Request, res: Response) {
    try {
      const transactionTypeRepository =
        getManager().getRepository(TransactionType);
      const transactionType = await transactionTypeRepository.findOne({
        id: req.params.id,
      });

      res.status(200).json({
        Success: true,
        Data: transactionType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async deleteTransactiontypeById(req: Request, res: Response) {
    try {
      const transactionTypeRepository =
        getManager().getRepository(TransactionType);
      const transactionType = await transactionTypeRepository.delete({
        id: req.query.id,
      });

      res.status(200).json({
        Success: true,
        Data: transactionType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async createTransactiontype(req: Request, res: Response) {
    try {
      console.log("create ", req.body);
      const transactionTypeRepository =
        getManager().getRepository(TransactionType);
      const transactionType = await transactionTypeRepository.save(req.body);

      res.status(200).json({
        Success: true,
        Data: transactionType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async updateTransactiontype(req: Request, res: Response) {
    try {
      console.log("update body ", req.body);
      console.log("update query ", req.query);

      const transactionTypeRepository =
        getManager().getRepository(TransactionType);
      const transactionType = await transactionTypeRepository.update(
        { id: req.query.id },
        req.body
      );
      res.status(200).json({
        Success: true,
        Data: transactionType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }
}
