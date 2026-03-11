function parsePacketLine(line) {
try {
const parts = line.trim().split(" ");

```
const timestamp = parseFloat(parts[0]);

const src = parts[2];
const dest = parts[4];

if (!src || !dest) return null;

const [srcIP, srcPort] = src.split(".");
const [destIP, destPort] = dest.replace(":", "").split(".");

return {
  timestamp,
  srcIP,
  srcPort: Number(srcPort),
  destIP,
  destPort: Number(destPort),
  protocol: line.includes("UDP") ? "UDP" : "TCP"
};
```

} catch (err) {
return null;
}
}

module.exports = {
parsePacketLine
};
