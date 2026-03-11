const express = require("express");
const router = express.Router();
const { generatePacketForHost } = require("../stream/dummy.stream");

router.post("/generate-packet", (req, res) => {
  const { url, count } = req.body;
  if (!url) return res.status(400).json({ message: "url is required" });

  generatePacketForHost(url, count || 5);
  res.json({ message: `Generated ${count || 5} packets for ${url}` });
});

module.exports = router;