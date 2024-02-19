require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const { MONGODB_PASSWORD } = process.env;
const PORT = process.env.PORT || 5000;


const app = express()

app.use(express.json())
app.use("/auth", authRouter)

const uriDB = `mongodb+srv://muslimslopy:${MONGODB_PASSWORD}@authcluster.phovvay.mongodb.net/auth_roles?retryWrites=true&w=majority`;
const start = async () => {
    try {
        await mongoose.connect(uriDB)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}


start()