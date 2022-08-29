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
const typeorm_1 = require("typeorm");
const operation_type_1 = require("../entity/operation.type");
class OperationTypeController {
    getAllOperationtypes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const operationTypeRepository = typeorm_1.getManager().getRepository(operation_type_1.OperationType);
                const operationTypes = yield operationTypeRepository.find();
                res.status(200).json({
                    Success: true,
                    Data: operationTypes,
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
    getOperationtypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const operationTypeRepository = typeorm_1.getManager().getRepository(operation_type_1.OperationType);
                const operationType = yield operationTypeRepository.findOne({
                    id: req.params.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: operationType,
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
    deleteOperationtypeById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const operationTypeRepository = typeorm_1.getManager().getRepository(operation_type_1.OperationType);
                const operationType = yield operationTypeRepository.delete({
                    id: req.query.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: operationType,
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
    createOperationtype(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("create ", req.body);
                const operationTypeRepository = typeorm_1.getManager().getRepository(operation_type_1.OperationType);
                const operationType = yield operationTypeRepository.save(req.body);
                res.status(200).json({
                    Success: true,
                    Data: operationType,
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
    updateOperationtype(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("update body ", req.body);
                console.log("update query ", req.query);
                const operationTypeRepository = typeorm_1.getManager().getRepository(operation_type_1.OperationType);
                const operationType = yield operationTypeRepository.update({ id: req.query.id }, req.body);
                res.status(200).json({
                    Success: true,
                    Data: operationType,
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
exports.OperationTypeController = OperationTypeController;
//# sourceMappingURL=operation.type.controller.js.map