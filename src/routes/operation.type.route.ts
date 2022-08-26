import * as express from "express";
import { OperationTypeController } from "../controller/operation.type.controller";
import operationTypeValidator from "../validators/operation.type";
const operationRouter = express.Router();
const operationtypeController = new OperationTypeController();

operationRouter.post(
  "/create",
  operationTypeValidator,
  operationtypeController.createOperationtype
);
operationRouter.put(
  "/update",
  operationTypeValidator,
  operationtypeController.updateOperationtype
);
operationRouter.delete(
  "/delete",
  operationtypeController.deleteOperationtypeById
);
operationRouter.get("/:id", operationtypeController.getOperationtypeById);
operationRouter.get("/", operationtypeController.getAllOperationtypes);

export default operationRouter;
