import * as express from "express";
import { AccountTypeController } from "../controller/account.type.controller";
import accountTypeValidator from "../validators/account.type.validator";
const accountRouter = express.Router();
const accounttypeController = new AccountTypeController();

accountRouter.post(
  "/create",
  accountTypeValidator,
  accounttypeController.createAccountype
);
accountRouter.put(
  "/update",
  accountTypeValidator,
  accounttypeController.updateAccountype
);
accountRouter.delete("/delete", accounttypeController.deleteAccountypeById);
accountRouter.get("/:id", accounttypeController.getAccountypeById);
accountRouter.get("/", accounttypeController.getAllAccountypes);

export default accountRouter;
