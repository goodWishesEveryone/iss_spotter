
////////////////////////   ISS Spotter With Promises  ////////////////////////
// iss_promised.js

const request = require("request-promise-native");

/*
 * Requests user's ip address from https://www.ipify.org/
 * Input: None
 * Returns: Promise of request for ip data, returned as JSON string
 */
const fetchMyIP = function() {
  return request("https://api.ipify.org?format=json"); // returning the ip in a json format  (oject)
};
module.exports = { fetchMyIP };


// This function takes as input the JSON string (as it is returned from fetchMyIP) and therefore needs to parse this JSON content first, and then use the IP as part of the next API call using request. It should therefore be two lines of code at most:

// Parse the JSON string and extract the ip from it
// Make a request to freegeoip and return the promise from request
const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};

// const fetchCoordsByIP = function(fetchMyIPReturned) {
//   // from fetchMyIP
//   const ip = JSON.parse(fetchMyIPReturned).ip; // ip - object key of the of the "request("https://api.ipify.org?format=json");"  , which the fetchMyIP
//   return request(`https://freegeoip.app/json/${ip}`); // returning the response from this site, which the latitude, longitude
// };

/*
 * Requests data from api.open-notify.org using provided lat/long data
 * Input: JSON body containing geo data response from freegeoip.app
 * Returns: Promise of request for fly over data, returned as JSON string
 */
const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

/*
 * Input: None
 * Returns: Promise for fly over data for users location
 */
const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

/*
 * Requests data from api.open-notify.org using provided lat/long data
 * Input: JSON body containing geo data response from freegeoip.app
 * Returns: Promise of request for fly over data, returned as JSON string
 */

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation };