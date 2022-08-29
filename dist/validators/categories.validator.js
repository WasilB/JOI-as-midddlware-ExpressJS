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
const categoriesSchema = Joi.object({
    category_name: Joi.string().alphanum().required(),
    type: Joi.string().alphanum().required(),
});
const categoriesValidator = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { error, value } = categoriesSchema.validate(req.body);
    if (error) {
        res.send(error);
    }
    else {
        next();
    }
});
exports.default = categoriesValidator;
//# sourceMappingURL=categories.validator.js.map