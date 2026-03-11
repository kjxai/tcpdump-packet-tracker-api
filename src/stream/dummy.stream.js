const packetService = require("../services/packet.service");
const dns = require("dns");

function generatePacketForHost(host, count = 5) {
  dns.lookup(host, (err, address) => {
    const destIP = err ? host : address;

    for (let i = 0; i < count; i++) {
      const packet = {
        timestamp: Date.now(),
        srcIP: `192.168.0.${Math.floor(Math.random() * 255)}`,
        srcPort: Math.floor(Math.random() * 64535) + 1024,
        destIP,
        destPort: 80,
        protocol: "TCP",
        length: Math.floor(Math.random() * 1500),
        direction: "Out"
      };
      packetService.addPacket(packet);
    }
  });
}

module.exports = {
  generatePacketForHost
};