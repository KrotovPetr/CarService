require('dotenv').config();
const express = require('express');
const models = require('./models/models')
const router = require('./routes')
const  sequelize  =require('./db');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start();