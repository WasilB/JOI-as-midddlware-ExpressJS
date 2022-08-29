import { Request, Response } from "express";
import { ChartAccount } from "../entity/chart.account";
import { Double, getManager } from "typeorm";

export class ChartAccountController {
  async getAllChartAccount(req: Request, res: Response) {
    try {
      const chartAccountRepository = getManager().getRepository(ChartAccount);
      const chartAccount = await chartAccountRepository.find();

      res.status(200).json({
        Success: true,
        Data: chartAccount,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async getChartAccountById(req: Request, res: Response) {
    try {
      const chartAccountRepository = getManager().getRepository(ChartAccount);
      const chartAccount = await chartAccountRepository.findOne({
        account_id: req.params.id,
      });
      res.status(200).json({
        Success: true,
        Data: chartAccount,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async deleteChartAccountById(req: Request, res: Response) {
    try {
      const chartAccountRepository = getManager().getRepository(ChartAccount);
      const chartAccount = await chartAccountRepository.delete({
        account_id: req.query.id,
      });

      res.status(200).json({
        Success: true,
        Data: chartAccount,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async createChartAccount(req: Request, res: Response) {
    try {
      console.log("create ", req.body);
      const chartAccountRepository = getManager().getRepository(ChartAccount);
      const chartAccount = await chartAccountRepository.save(req.body);

      res.status(200).json({
        Success: true,
        Data: chartAccount,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async updateChartAccount(req: Request, res: Response) {
    try {
      console.log("update body ", req.body);
      console.log("update query ", req.query);

      const chartAccountRepository = getManager().getRepository(ChartAccount);
      const chartAccount = await chartAccountRepository.update(
        { account_id: req.query.id },
        req.body
      );
      res.status(200).json({
        Success: true,
        Data: chartAccount,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }
}
