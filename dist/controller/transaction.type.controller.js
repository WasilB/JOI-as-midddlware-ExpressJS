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
const transaction_type_1 = require("../entity/transaction.type");
const typeorm_1 = require("typeorm");
class TransactionTypeController {
    getAllTransactiontypes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactionTypeRepository = typeorm_1.getManager().getRepository(transaction_type_1.TransactionType);
                const transactionTypes = yield transactionTypeRepository.find();
                res.status(200).json({
                    Success: true,
                    Data: transactionTypes,
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
    getTransactiontypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactionTypeRepository = typeorm_1.getManager().getRepository(transaction_type_1.TransactionType);
                const transactionType = yield transactionTypeRepository.findOne({
                    id: req.params.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: transactionType,
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
    deleteTransactiontypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const transactionTypeRepository = typeorm_1.getManager().getRepository(transaction_type_1.TransactionType);
                const transactionType = yield transactionTypeRepository.delete({
                    id: req.query.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: transactionType,
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
    createTransactiontype(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("create ", req.body);
                const transactionTypeRepository = typeorm_1.getManager().getRepository(transaction_type_1.TransactionType);
                const transactionType = yield transactionTypeRepository.save(req.body);
                res.status(200).json({
                    Success: true,
                    Data: transactionType,
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
    updateTransactiontype(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("update body ", req.body);
                console.log("update query ", req.query);
                const transactionTypeRepository = typeorm_1.getManager().getRepository(transaction_type_1.TransactionType);
                const transactionType = yield transactionTypeRepository.update({ id: req.query.id }, req.body);
                res.status(200).json({
                    Success: true,
                    Data: transactionType,
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
exports.TransactionTypeController = TransactionTypeController;
//# sourceMappingURL=transaction.type.controller.js.map