const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const userRoutes = require('./routes/userRoutes')

// const routes = require("./routes/TaskRoute")

const cors = require("cors");

const app = express(); 
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected ...'))
.catch((err) => console.log(err)); 


app.use("/api/users",userRoutes);

app.listen(PORT, () => console.log(`Listening at ${PORT}`));