const { spawn } = require("child_process");
const readline = require("readline");

const { command, args } = require("../config/tcpdump.config");
const { parsePacketLine } = require("./packet.parser");
const packetService = require("../services/packet.service");

function startTcpdumpStream() {
const tcpdump = spawn(command, args);

const rl = readline.createInterface({
input: tcpdump.stdout
});

rl.on("line", (line) => {
const packet = parsePacketLine(line);
if (packet) {
packetService.addPacket(packet);
}
});

tcpdump.stderr.on("data", (data) => {
console.error("tcpdump error:", data.toString());
});

tcpdump.on("close", (code) => {
console.log(`tcpdump process exited with code ${code}`);
});
}

module.exports = {
startTcpdumpStream
};
