const metricsStore = require("../state/metrics.store");
const fileReader = require("../storage/file.reader");

const health = (req, res) => {
res.json({
status: "ok",
service: "packet-monitor-service",
timestamp: Date.now()
});
};

const latestMetrics = (req, res) => {
const snapshot = metricsStore.getLatest();
if (!snapshot) return res.status(404).json({ message: "No metrics yet" });
res.json(snapshot);
};

const historyMetrics = (req, res) => {
const limit = parseInt(req.query.limit) || 50;
const data = fileReader.readHistory(limit);
res.json(data);
};

module.exports = {
health,
latestMetrics,
historyMetrics
};
