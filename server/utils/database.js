const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD ,
    {
        host: process.env.DB_HOST ,
        dialect: "mysql",
        logging: false, // Set to true for SQL logs
        port: process.env.DB_PORT || 3306,
        pool: {
            max: 10,
            min: 0,
            acquire: 60000, // 60 seconds
            idle: 10000
        },
        dialectOptions: {
            connectTimeout: 60000 // 60 seconds
        }
    }
);

// ✅ Test Database Connection
sequelize.authenticate()
  .then(() => console.log("✅ Database connected successfully"))
  .catch(err => console.error("❌ Database connection failed:", err));

module.exports = sequelize;
