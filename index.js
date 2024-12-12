require('dotenv').config();

const express = require("express");
const helmet = require("helmet");
const cors = require('cors');
const bodyParser = require('body-parser')
const routes = require("./src/routes/Routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 500000}));
app.use("/", routes);

if (process.env.APP_ENV === "PRODUCTION_AWS_LAMBDA") {
    const serverless = require('serverless-http');
    module.exports.handler = serverless(app);
} else if (process.env.APP_ENV === "PRODUCTION_GCP_CLOUDFUNCTION") {
    module.exports.main = app;
} else {
    app.listen(8000, function () {
        console.log("http://localhost:" + 8000);
    });
}