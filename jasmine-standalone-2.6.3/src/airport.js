function Airport() {
	this._planes = [];
	this.isStormy = Math.random() < 0.5 ? true : false;
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
	if (!this.isStormy){
	this._planes.pop(plane)
}
else {}
}

