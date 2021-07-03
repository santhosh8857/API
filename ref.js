// Data
let url = 'https://restcountries.eu/rest/v2/all';

// Using XMLHttpRequest

// Creating object for request
let req = new XMLHttpRequest();

// Initiating the request
req.open('GET', url);

// send request to server
req.send();

// retriving and accessing the data 
req.onload = function () {
   let data = JSON.parse(this.response);
   console.log(data);
}



// Using fetch


// fetch (url)
// promise
//    .then ((response) => {
//       return response.json();
//    })

// accessing the data
//    .then ((data) => {
//       console.log(data[0].name);
//    })

// catching the error
//    .catch ((err) => {
//       console.log(err);
//    })
   
