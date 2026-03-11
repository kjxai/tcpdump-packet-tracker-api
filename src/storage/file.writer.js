const fs = require("fs");
const path = require("path");

const DATA_DIR = path.join(__dirname, "../../data");
const DATA_FILE = path.join(DATA_DIR, "metrics.log");

// Ensure directory exists
if (!fs.existsSync(DATA_DIR)) {
fs.mkdirSync(DATA_DIR, { recursive: true });
}

function appendSnapshot(snapshot) {
const line = JSON.stringify(snapshot) + "\n";
fs.appendFile(DATA_FILE, line, (err) => {
if (err) console.error("Error writing snapshot to file:", err);
});
}

module.exports = {
appendSnapshot
};
