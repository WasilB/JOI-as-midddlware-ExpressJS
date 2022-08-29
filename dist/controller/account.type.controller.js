"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const account_type_1 = require("../entity/account.type");
const typeorm_1 = require("typeorm");
class AccountTypeController {
    getAllAccountypes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountTypeRepository = typeorm_1.getManager().getRepository(account_type_1.AccountType);
                const accountTypes = yield accountTypeRepository.find();
                res.status(200).json({
                    Success: true,
                    Data: accountTypes,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
    getAccountypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountTypeRepository = typeorm_1.getManager().getRepository(account_type_1.AccountType);
                const accountType = yield accountTypeRepository.findOne({
                    id: req.params.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: accountType,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
    deleteAccountypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const accountTypeRepository = typeorm_1.getManager().getRepository(account_type_1.AccountType);
                const accountType = yield accountTypeRepository.delete({
                    id: req.query.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: accountType,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
    createAccountype(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("create ", req.body);
                const accountTypeRepository = typeorm_1.getManager().getRepository(account_type_1.AccountType);
                const accountType = yield accountTypeRepository.save(req.body);
                return res.status(200).json({
                    Success: true,
                    Data: accountType,
                });
            }
            catch (error) {
                return res.status(400).json({
                    Message: error,
                    Success: false,
                });
            }
        });
    }
    updateAccountype(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("update body ", req.body);
                console.log("update query ", req.query);
                const accountTypeRepository = typeorm_1.getManager().getRepository(account_type_1.AccountType);
                const accountType = yield accountTypeRepository.update({ id: req.query.id }, req.body);
                res.status(200).json({
                    Success: true,
                    Data: accountType,
                });
            }
            catch (error) {
                res.status(400).json({
                    Success: false,
                    Message: error,
                });
            }
        });
    }
}
exports.AccountTypeController = AccountTypeController;
//# sourceMappingURL=account.type.controller.js.map