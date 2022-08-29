"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const chart_account_controller_1 = require("../controller/chart.account.controller");
const chart_account_validator_1 = require("../validators/chart.account.validator");
const chartAccountRouter = express.Router();
const chartAccountController = new chart_account_controller_1.ChartAccountController();
chartAccountRouter.post("/create", chart_account_validator_1.default, chartAccountController.createChartAccount);
chartAccountRouter.put("/update", chart_account_validator_1.default, chartAccountController.updateChartAccount);
chartAccountRouter.delete("/delete", chartAccountController.deleteChartAccountById);
chartAccountRouter.get("/:id", chartAccountController.getChartAccountById);
chartAccountRouter.get("/", chartAccountController.getAllChartAccount);
exports.default = chartAccountRouter;
//# sourceMappingURL=chart.account.route.js.map