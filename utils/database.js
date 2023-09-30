const { Sequelize } = require("sequelize");
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { dialect: 'postgres', });

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection to DB has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

module.exports = { sq: sequelize, testDbConnection };