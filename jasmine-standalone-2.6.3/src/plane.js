function Plane() {
	this.land = function(airport) {
		airport.clearForLanding(this)
	}

	this.takeOff = function(airport) {
		airport.clearForTakingOff(this)
	}
}