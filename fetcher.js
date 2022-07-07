const request = require('request');
const fs = require('fs');

const fetchSite = (URL) => {
  request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the page.

  fs.writeFile('./test.html', body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });


  

});}

fetchSite('http://www.google.com');





