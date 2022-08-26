import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import accountRouter from "./routes/account.type.route";
import categoryRouter from "./routes/catagories.route";
import operationRouter from "./routes/operation.type.route";
import transactionRouter from "./routes/transaction.type.route";

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
createConnection()
  .then(async (connection) => {
    console.log("Express application is up and running on port 3000");
  })
  .catch((error) => console.log("TypeORM connection error: ", error));

// create express app
const app = express();
app.use(bodyParser.json());
app.use("/accounttype", accountRouter);
app.use("/category", categoryRouter);
app.use("/operationtype", operationRouter);
app.use("/transactiontype", transactionRouter);

// run app
app.listen(3000);
