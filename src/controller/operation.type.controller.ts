import { Request, Response } from "express";
import { Double, getManager } from "typeorm";
import { OperationType } from "../entity/operation.type";

export class OperationTypeController {
  async getAllOperationtypes(req: Request, res: Response) {
    try {
      const operationTypeRepository = getManager().getRepository(OperationType);
      const operationTypes = await operationTypeRepository.find();
      res.status(200).json({
        Success: true,
        Data: operationTypes,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async getOperationtypeById(req: Request, res: Response) {
    try {
      const operationTypeRepository = getManager().getRepository(OperationType);
      const operationType = await operationTypeRepository.findOne({
        id: req.params.id,
      });

      res.status(200).json({
        Success: true,
        Data: operationType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async deleteOperationtypeById(req: Request, res: Response) {
    try {
      const operationTypeRepository = getManager().getRepository(OperationType);
      const operationType = await operationTypeRepository.delete({
        id: req.query.id,
      });

      res.status(200).json({
        Success: true,
        Data: operationType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async createOperationtype(req: Request, res: Response) {
    try {
      console.log("create ", req.body);
      const operationTypeRepository = getManager().getRepository(OperationType);
      const operationType = await operationTypeRepository.save(req.body);
      res.status(200).json({
        Success: true,
        Data: operationType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }

  async updateOperationtype(req: Request, res: Response) {
    try {
      console.log("update body ", req.body);
      console.log("update query ", req.query);

      const operationTypeRepository = getManager().getRepository(OperationType);
      const operationType = await operationTypeRepository.update(
        { id: req.query.id },
        req.body
      );
      res.status(200).json({
        Success: true,
        Data: operationType,
      });
    } catch (error) {
      res.status(400).json({
        Success: false,
        Message: error,
      });
    }
  }
}
