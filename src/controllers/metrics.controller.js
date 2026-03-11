const metricsStore = require("../state/metrics.store");

const health = (req, res) => {
res.json({
status: "ok",
service: "packet-monitor-service",
timestamp: Date.now()
});
};

const latestMetrics = (req, res) => {
const snapshot = metricsStore.getLatest();
if (!snapshot) {
return res.status(404).json({ message: "No metrics yet" });
}
res.json(snapshot);
};

module.exports = {
health,
latestMetrics
};
