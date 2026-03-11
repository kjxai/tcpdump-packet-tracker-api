function parsePacketLine(line) {
// Example line:
// 1773224441.786334 eth0  Out IP 172.21.142.134.58380 > 185.125.190.57.123: UDP, length 48

const regex = /^(\d+.\d+)\s+\S+\s+(In|Out|M)?\s*IP\s+([0-9.]+).(\d+)\s+>\s+([0-9.]+).(\d+):\s*(TCP|UDP)?,?\s*length\s+(\d+)/;

const match = line.match(regex);
if (!match) return null;

const [, timestamp, direction, srcIP, srcPort, destIP, destPort, protocol, length] = match;

return {
timestamp: parseFloat(timestamp),
direction: direction || "Unknown",
srcIP,
srcPort: Number(srcPort),
destIP,
destPort: Number(destPort),
protocol: protocol || "TCP",
length: Number(length)
};
}

module.exports = {
parsePacketLine
};
