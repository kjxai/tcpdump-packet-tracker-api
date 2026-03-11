const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../../data/metrics.log");

function readHistory(limit = 50) {
if (!fs.existsSync(DATA_FILE)) return [];

const lines = fs.readFileSync(DATA_FILE, "utf-8")
.split("\n")
.filter(Boolean);

const lastLines = lines.slice(-limit);
return lastLines.map(line => {
try {
return JSON.parse(line);
} catch (err) {
return null;
}
}).filter(Boolean);
}

module.exports = {
readHistory
};
