const express = require("express");
const router = express.Router();

const metricsController = require("../controllers/metrics.controller");

router.get("/health", metricsController.health);
router.get("/metrics/latest", metricsController.latestMetrics);
router.get("/metrics/history", metricsController.historyMetrics);
router.get("/metrics/top-ports", metricsController.topPorts);
router.get("/metrics/top-ips", metricsController.topIPs);

module.exports = router;
