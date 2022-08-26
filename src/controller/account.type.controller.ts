import { Request, Response } from "express";
import { AccountType } from "../entity/account.type";
import { Double, getManager } from "typeorm";

export class AccountTypeController {
  async getAllAccountypes(req: Request, res: Response) {
    try {
      const accountTypeRepository = getManager().getRepository(AccountType);
      const accountTypes = await accountTypeRepository.find();
      res.status(200).json({
        Success: true,
        Data: accountTypes,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async getAccountypeById(req: Request, res: Response) {
    try {
      const accountTypeRepository = getManager().getRepository(AccountType);
      const accountType = await accountTypeRepository.findOne({
        id: req.params.id,
      });

      res.status(200).json({
        Success: true,
        Data: accountType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async deleteAccountypeById(req: Request, res: Response) {
    try {
      const accountTypeRepository = getManager().getRepository(AccountType);
      const accountType = await accountTypeRepository.delete({
        id: req.query.id,
      });

      res.status(200).json({
        Success: true,
        Data: accountType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async createAccountype(req: Request, res: Response) {
    try {
      console.log("create ", req.body);
      const accountTypeRepository = getManager().getRepository(AccountType);
      const accountType = await accountTypeRepository.save(req.body);
      return res.status(200).json({
        Success: true,
        Data: accountType,
      });
    } catch (error) {
      return res.status(400).json({
        Message: error,
        Success: false,
      });
    }
  }

  async updateAccountype(req: Request, res: Response) {
    try {
      console.log("update body ", req.body);
      console.log("update query ", req.query);

      const accountTypeRepository = getManager().getRepository(AccountType);
      const accountType = await accountTypeRepository.update(
        { id: req.query.id },
        req.body
      );
      res.status(200).json({
        Success: true,
        Data: accountType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }
}
