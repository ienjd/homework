let positionLat = 89;
let positionLong = 79;

let addressLat = 96;
let addressLong = 99;

let distanceLat = Math.abs(positionLat - addressLat);
let distanceLong = Math.abs(positionLong - addressLong);

const distance = ((distanceLat ** 2) + (distanceLong ** 2)) ** 0.5  

console.log(distance.toFixed(2));

