const express= require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();

const port = process.env.PORT || 3010


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_CONNECT).then(() => {
    console.log("Connection succesfull")
})

app.use("/",require("./routes/nodeRoute"));

app.listen(port,function(){
    console.log("express server is running on port",port);
})