require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const PORT = process.env.PORT || 3000
const app = express()


const host = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

host()