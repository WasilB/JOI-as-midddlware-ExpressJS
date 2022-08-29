"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const operation_type_controller_1 = require("../controller/operation.type.controller");
const operation_type_1 = require("../validators/operation.type");
const operationRouter = express.Router();
const operationtypeController = new operation_type_controller_1.OperationTypeController();
operationRouter.post("/create", operation_type_1.default, operationtypeController.createOperationtype);
operationRouter.put("/update", operation_type_1.default, operationtypeController.updateOperationtype);
operationRouter.delete("/delete", operationtypeController.deleteOperationtypeById);
operationRouter.get("/:id", operationtypeController.getOperationtypeById);
operationRouter.get("/", operationtypeController.getAllOperationtypes);
exports.default = operationRouter;
//# sourceMappingURL=operation.type.route.js.map