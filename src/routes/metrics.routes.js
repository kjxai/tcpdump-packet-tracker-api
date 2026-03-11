const express = require("express");
const router = express.Router();

const metricsController = require("../controllers/metrics.controller");

router.get("/health", metricsController.health);
router.get("/metrics/latest", metricsController.latestMetrics);

module.exports = router;
