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
const Joi = require("joi");
const transactionTypeSchema = Joi.object({
    transaction_type_name: Joi.string().alphanum().required(),
    transaction_type_id: Joi.number().required(),
    transaction_type_details: Joi.string().alphanum().required(),
    transaction_type_purged: Joi.boolean(),
});
const transactionTypeValidaotr = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = transactionTypeSchema.validate(req.body);
    if (error) {
        res.send(error);
    }
    else {
        next();
    }
});
exports.default = transactionTypeValidaotr;
//# sourceMappingURL=transaction.type.js.map