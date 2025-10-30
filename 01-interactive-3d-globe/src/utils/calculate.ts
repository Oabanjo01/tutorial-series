// Convert the globe's altitude to a zoom level that Supercluster understands
const altitudeToZoom = (altitude: number): number => {
  // Globe altitude: 1 = close, 4+ = far
  // Zoom level: 0 = far (whole world), 18 = close (street level)
  // Formula: invert the relationship and scale appropriately
  const zoom = 18 - altitude * 3.5;

  // Clamp between 0 and 18 to stay within valid range
  return Math.max(0, Math.min(18, Math.round(zoom)));
};

// Calculate what part of the globe the user can currently see
const calculateViewBounds = (pov: {
  lat: number;
  lng: number;
  altitude: number;
}): [number, number, number, number] => {
  // Field of view gets larger as altitude increases (camera moves away)
  const latRange = Math.min(90, Math.max(10, pov.altitude * 25));
  const lngRange = Math.min(180, Math.max(15, pov.altitude * 35));

  return [
    Math.max(-180, pov.lng - lngRange), // west boundary
    Math.max(-90, pov.lat - latRange), // south boundary
    Math.min(180, pov.lng + lngRange), // east boundary
    Math.min(90, pov.lat + latRange), // north boundary
  ];
};

export { altitudeToZoom, calculateViewBounds };
