"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const account_type_controller_1 = require("../controller/account.type.controller");
const account_type_validator_1 = require("../validators/account.type.validator");
const accountRouter = express.Router();
const accounttypeController = new account_type_controller_1.AccountTypeController();
accountRouter.post("/create", account_type_validator_1.default, accounttypeController.createAccountype);
accountRouter.put("/update", account_type_validator_1.default, accounttypeController.updateAccountype);
accountRouter.delete("/delete", accounttypeController.deleteAccountypeById);
accountRouter.get("/:id", accounttypeController.getAccountypeById);
accountRouter.get("/", accounttypeController.getAllAccountypes);
exports.default = accountRouter;
//# sourceMappingURL=account.type.route.js.map