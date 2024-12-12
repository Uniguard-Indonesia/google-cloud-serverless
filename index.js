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

app.listen(8080, function () {
    console.log("server running on port" + 8080);
});