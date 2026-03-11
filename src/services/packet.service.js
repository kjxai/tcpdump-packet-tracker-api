const packetsBuffer = [];

function addPacket(packet) {
if (!packet) return;
packetsBuffer.push(packet);
}

function getPackets() {
return packetsBuffer;
}

function clearPackets() {
packetsBuffer.length = 0;
}

module.exports = {
addPacket,
getPackets,
clearPackets
};
