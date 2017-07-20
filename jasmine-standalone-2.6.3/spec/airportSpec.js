describe('AirportChallenge', function() {
  let airport;
  let plane;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("plane can land at the airport", function() {
    airport.isStormy = false;
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it("plane can leave the airport", function() {
    airport.isStormy = false;
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  });

  it("plane can't land if weather is stormy", function() {
    airport.isStormy = true;
    plane.land(airport);
    expect(airport.planes()).not.toContain(plane);
  })

  it("plane can't take off if weather is stormy", function() {
    airport.isStormy = true;
    plane.takeOff(airport);
    expect(airport.planes()).not.toContain(plane);
  })


  it("plane can't land if airport is full", function() {
    plane2 = new Plane();
    plane3 = new Plane();
    plane4 = new Plane();
    plane.land(airport);
    plane2.land(airport);
    plane3.land(airport);
    plane4.land(airport);
    expect(airport.planes()).not.toContain(plane4);
  })
});