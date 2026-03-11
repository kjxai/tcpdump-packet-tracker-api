function parsePacketLine(line) {
// Example tcpdump line:
// 1710000.123456 IP 192.168.1.10.54822 > 8.8.8.8.443: Flags [S], seq 12345, length 0

const match = line.match(/^(\d+.\d+)\s+IP\s+([0-9.]+).(\d+)\s+>\s+([0-9.]+).(\d+).*length\s+(\d+)/);

if (!match) return null;

const [, timestamp, srcIP, srcPort, destIP, destPort, length] = match;

return {
timestamp: parseFloat(timestamp),
srcIP,
srcPort: Number(srcPort),
destIP,
destPort: Number(destPort),
protocol: line.includes("UDP") ? "UDP" : "TCP",
length: Number(length)
};
}

module.exports = {
parsePacketLine
};
