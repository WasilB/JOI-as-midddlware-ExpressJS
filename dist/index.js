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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express = require("express");
const bodyParser = require("body-parser");
const account_type_route_1 = require("./routes/account.type.route");
const catagories_route_1 = require("./routes/catagories.route");
const operation_type_route_1 = require("./routes/operation.type.route");
const transaction_type_route_1 = require("./routes/transaction.type.route");
const chart_account_route_1 = require("./routes/chart.account.route");
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
typeorm_1.createConnection()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Express application is up and running on port 3000");
}))
    .catch((error) => console.log("TypeORM connection error: ", error));
// create express app
const app = express();
app.use(bodyParser.json());
app.use("/accounttype", account_type_route_1.default);
app.use("/category", catagories_route_1.default);
app.use("/operationtype", operation_type_route_1.default);
app.use("/transactiontype", transaction_type_route_1.default);
app.use("/chartaccount", chart_account_route_1.default);
// run app
app.listen(3000);
//# sourceMappingURL=index.js.map