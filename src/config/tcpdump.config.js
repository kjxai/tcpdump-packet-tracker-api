// src/config/tcpdump.config.js
module.exports = {
  command: "tcpdump",             // must be string
  args: [
    "-l",          // line buffered
    "-n",          // no DNS resolution
    "-q",          // less verbose
    "-tt",         // timestamp
    "-i", "any",   // capture on all interfaces
    "tcp or udp"
  ]
};