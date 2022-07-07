'use strict';

const request = require('request');
const fs = require('fs');

const fetchSite = (url, directory) => {
  request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the page.

  fs.writeFile( directory, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`${url} saved to ${directory}.`)
  });
});}

let url = process.argv[2];
console.log(url);
let directory = process.argv[3];
console.log(directory);
fetchSite(url, directory);





