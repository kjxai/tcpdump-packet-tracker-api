const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../../data/metrics.log");

function appendSnapshot(snapshot) {
const line = JSON.stringify(snapshot) + "\n";
fs.appendFile(DATA_FILE, line, (err) => {
if (err) console.error("Error writing snapshot to file:", err);
});
}

module.exports = {
appendSnapshot
};
