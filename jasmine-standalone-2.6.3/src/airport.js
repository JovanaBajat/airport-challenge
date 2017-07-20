function Airport() {
	this._planes = [];
	this.isStormy = false;
	this.capacity = 3;
}
Airport.prototype.planes = function () {
	return this._planes;
};

Airport.prototype.clearForLanding = function(plane) {
	if (!this.isStormy && this._planes.length < this.capacity) {
		this._planes.push(plane)
	}
	else {}
};

Airport.prototype.clearForTakingOff = function(plane) {
	this._planes.pop(plane)
}

