"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const transaction_type_controller_1 = require("../controller/transaction.type.controller");
const transaction_type_1 = require("../validators/transaction.type");
const transactionRouter = express.Router();
const transactiontypeController = new transaction_type_controller_1.TransactionTypeController();
transactionRouter.post("/create", transaction_type_1.default, transactiontypeController.createTransactiontype);
transactionRouter.put("/update", transaction_type_1.default, transactiontypeController.updateTransactiontype);
transactionRouter.delete("/delete", transactiontypeController.deleteTransactiontypeById);
transactionRouter.get("/:id", transactiontypeController.getTransactiontypeById);
transactionRouter.get("/", transactiontypeController.getAllTransactiontypes);
exports.default = transactionRouter;
//# sourceMappingURL=transaction.type.route.js.map