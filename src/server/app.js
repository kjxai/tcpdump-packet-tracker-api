const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { PORT } = require("../config/server.config");
const metricsRoutes = require("../routes/metrics.routes");
const { startTcpdumpStream } = require("../stream/tcpdump.stream");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", metricsRoutes);

startTcpdumpStream();

app.listen(PORT, () => {
console.log(`Packet Monitor Service running on port ${PORT}`);
});
