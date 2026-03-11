const packetService = require("../services/packet.service");
const metricsStore = require("../state/metrics.store");
const fileWriter = require("../storage/file.writer");

function aggregatePackets() {
const packets = packetService.getPackets();

const snapshot = {
timestamp: Date.now(),
window: 10,
totalPackets: packets.length,
tcpPackets: packets.filter(p => p.protocol === "TCP").length,
udpPackets: packets.filter(p => p.protocol === "UDP").length,
bandwidthBytes: packets.reduce((sum, p) => sum + (p.length || 64), 0),
topPorts: {},
topIPs: {}
};

packets.forEach(p => {
snapshot.topPorts[p.destPort] = (snapshot.topPorts[p.destPort] || 0) + 1;
snapshot.topIPs[p.destIP] = (snapshot.topIPs[p.destIP] || 0) + 1;
});

metricsStore.setLatest(snapshot);
fileWriter.appendSnapshot(snapshot);

packetService.clearPackets();
}

module.exports = {
aggregatePackets
};
