import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
//components
import connection from "./connection/db.js";
import DefaultData from "./default.js";
import Route from "./Routes/route.js";

const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true })
app.use(bodyParser.json({ extended: true }))
app.use(cors())
app.use('/', Route);


const PORT = 8000;

connection();

app.listen( PORT, () => console.log(`Server is running on port ${PORT} successfully`));

DefaultData();