const health = (req, res) => {
res.json({
status: "ok",
service: "packet-monitor-service",
timestamp: Date.now()
});
};

const latestMetrics = (req, res) => {
res.json({
message: "metrics endpoint placeholder",
data: null
});
};

module.exports = {
health,
latestMetrics
};
