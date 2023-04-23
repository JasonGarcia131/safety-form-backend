require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require('./config/connectDB');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());


// app.use("/", (req,res)=>{
//     res.send("Home page")
// });

const inspectionController = require("./controllers/inspectionController");
app.use("/inspection", inspectionController);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});