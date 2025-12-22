const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const healthRoutes = require("./routes/health.routes");
app.use("/api", healthRoutes);

module.exports = app;