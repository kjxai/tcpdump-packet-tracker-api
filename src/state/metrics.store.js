let latestSnapshot = null;

function setLatest(snapshot) {
latestSnapshot = snapshot;
}

function getLatest() {
return latestSnapshot;
}

module.exports = {
setLatest,
getLatest
};
