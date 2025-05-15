const dotenv = require('dotenv');
dotenv.config({ path: `${__dirname}/config.env` });
const sequelize = require("./utils/database");
const app = require('./app');
const PORT = process.env.PORT || 3002;

app.listen(PORT, async () => {
    console.log(`🚀 Server running on port ${PORT}`);
    try {
        await sequelize.authenticate();
        console.log("✅ Database connected");
        await sequelize.sync();
    } catch (error) {
        console.error("❌ Database connection failed:", error);
    }
});
