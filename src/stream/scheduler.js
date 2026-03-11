const { aggregatePackets } = require("./aggregator.engine");

function startScheduler() {
setInterval(() => {
aggregatePackets();
}, 10000); // 10 seconds
}

module.exports = {
startScheduler
};
