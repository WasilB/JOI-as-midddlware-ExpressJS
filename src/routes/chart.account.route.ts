import * as express from "express";
import { ChartAccountController } from "../controller/chart.account.controller";
import chartAccountValidator from "../validators/chart.account.validator";

const chartAccountRouter = express.Router();
const chartAccountController = new ChartAccountController();

chartAccountRouter.post(
  "/create",
  chartAccountValidator,
  chartAccountController.createChartAccount
);
chartAccountRouter.put(
  "/update",
  chartAccountValidator,
  chartAccountController.updateChartAccount
);
chartAccountRouter.delete(
  "/delete",
  chartAccountController.deleteChartAccountById
);
chartAccountRouter.get("/:id", chartAccountController.getChartAccountById);
chartAccountRouter.get("/", chartAccountController.getAllChartAccount);

export default chartAccountRouter;
