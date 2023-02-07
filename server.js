const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 4500;
const app = express();
const ticketRoutes = require("./src/routes/ticket");
const { getDocs, addDoc }= require("firebase/firestore");

var corsOptions = {
    origin: "*" 
} 

app.use(cors(corsOptions));
app.use(bodyParser.json());

//main path
app.get("/",(req, res) => res.json({"data":"sama tickets root path /"}));

//main api path
app.get("/api",(req, res) => res.json({"welcome dev":"this is sama geeks api/"}));

//API ticket collection routes
app.use("/api", ticketRoutes);//api/ticket

app.listen(PORT, () => console.log(`server running http://localhost:${PORT}`));