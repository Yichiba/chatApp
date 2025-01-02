require("dotenv").config()
const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('connected');
    } catch (err) {
        console.error('Connection error', err);
    }
};

module.exports = connectdb;