import * as express from "express";
import { TransactionTypeController } from "../controller/transaction.type.controller";
import transactionTypeValidaotr from "../validators/transaction.type";
const transactionRouter = express.Router();
const transactiontypeController = new TransactionTypeController();

transactionRouter.post(
  "/create",
  transactionTypeValidaotr,
  transactiontypeController.createTransactiontype
);
transactionRouter.put(
  "/update",
  transactionTypeValidaotr,
  transactiontypeController.updateTransactiontype
);
transactionRouter.delete(
  "/delete",
  transactiontypeController.deleteTransactiontypeById
);
transactionRouter.get("/:id", transactiontypeController.getTransactiontypeById);
transactionRouter.get("/", transactiontypeController.getAllTransactiontypes);

export default transactionRouter;
