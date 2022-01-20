///////////////////   ISS Spotter With Promises  //////////////////
//const { fetchMyIP } = require('./iss_promised');

const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require("./iss_promised");

//const { fetchMyIP, nextISSTimesForMyLocation } = require("./iss_promised");

// fetchMyIP().then(body => {
//   console.log(body);
// });

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(body => console.log(body));

fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((body) => console.log(body));

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchCoordsByIPReturned => console.log(fetchCoordsByIPReturned));

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then((fetchISSFlyOverTimesReturned) =>
//     console.log(fetchISSFlyOverTimesReturned)
//   );

// see index.js for printPassTimes
// copy it from there, or better yet, moduralize and require it in both files
// Call
// nextISSTimesForMyLocation()
//   .then((passTimes) => {
//     printPassTimes(passTimes);
//   });

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
