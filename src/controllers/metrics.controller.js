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

const topPorts = (req, res) => {
const snapshot = metricsStore.getLatest();
if (!snapshot) return res.status(404).json({ message: "No metrics yet" });

const sortedPorts = Object.entries(snapshot.topPorts)
.sort((a, b) => b[1] - a[1])
.map(([port, count]) => ({ port, count }));

res.json(sortedPorts);
};

const topIPs = (req, res) => {
const snapshot = metricsStore.getLatest();
if (!snapshot) return res.status(404).json({ message: "No metrics yet" });

const sortedIPs = Object.entries(snapshot.topIPs)
.sort((a, b) => b[1] - a[1])
.map(([ip, count]) => ({ ip, count }));

res.json(sortedIPs);
};

module.exports = {
health,
latestMetrics,
historyMetrics,
topPorts,
topIPs
};
