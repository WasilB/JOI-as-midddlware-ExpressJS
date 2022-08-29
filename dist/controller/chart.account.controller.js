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
const chart_account_1 = require("../entity/chart.account");
const typeorm_1 = require("typeorm");
class ChartAccountController {
    getAllChartAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chartAccountRepository = typeorm_1.getManager().getRepository(chart_account_1.ChartAccount);
                const chartAccount = yield chartAccountRepository.find();
                res.status(200).json({
                    Success: true,
                    Data: chartAccount,
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
    getChartAccountById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chartAccountRepository = typeorm_1.getManager().getRepository(chart_account_1.ChartAccount);
                const chartAccount = yield chartAccountRepository.findOne({
                    account_id: req.params.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: chartAccount,
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
    deleteChartAccountById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const chartAccountRepository = typeorm_1.getManager().getRepository(chart_account_1.ChartAccount);
                const chartAccount = yield chartAccountRepository.delete({
                    account_id: req.query.id,
                });
                res.status(200).json({
                    Success: true,
                    Data: chartAccount,
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
    createChartAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("create ", req.body);
                const chartAccountRepository = typeorm_1.getManager().getRepository(chart_account_1.ChartAccount);
                const chartAccount = yield chartAccountRepository.save(req.body);
                res.status(200).json({
                    Success: true,
                    Data: chartAccount,
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
    updateChartAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("update body ", req.body);
                console.log("update query ", req.query);
                const chartAccountRepository = typeorm_1.getManager().getRepository(chart_account_1.ChartAccount);
                const chartAccount = yield chartAccountRepository.update({ account_id: req.query.id }, req.body);
                res.status(200).json({
                    Success: true,
                    Data: chartAccount,
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
exports.ChartAccountController = ChartAccountController;
//# sourceMappingURL=chart.account.controller.js.map