const request = require('request');
const query = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${query}`, (error, response, body) => {
if (error) {
  console.log('error:', error);
 } else {
  const data = JSON.parse(body);
  console.log(data[0].description);
 } 

});
