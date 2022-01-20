///////////////////////////   ISS Spotter I  //////////////////////////

// const { fetchMyIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// The code below is temporary and can be commented out.
// const { fetchMyIP } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

////////////////////////////  Spotter II    /////////////////////////////////

// fetchCoordsByIP('207.194.49.162', (error, geos) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked!", geos);
// });

// fetchISSFlyOverTimes({latitude:"43.63190",longitude:"-79.37160"}, (error, flyTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked!", flyTimes);
// });

//
//==================== 2 ================

// The code below is temporary and can be commented out.
const { fetchCoordsByIP } = require("./iss");

fetchCoordsByIP("162.245.144.188", (error, coordinates) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned coordinates:", coordinates);
});

////////////////////////////  Spotter III    /////////////////////////////////
/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
//const fetchISSFlyOverTimes = function(coords, callback) {
// ...
//};

// The code below is temporary and can be commented out.
const { fetchISSFlyOverTimes } = require("./iss");

const exampleCoords = { latitude: "49.27670", longitude: "-123.13000" };

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log("It worked! Returned flyover times:", passTimes);
});

////////////////////////////  Spotter IV  /////////////////////////////////
const { nextISSTimesForMyLocation } = require('./iss');

/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
