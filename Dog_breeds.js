//creating a variable with XMLHttpRequest
let req = new XMLHttpRequest();
//getting the url
let url='https://dog.ceo/api/breeds/list/all';

//initializing the request
req.open('GET',url,true);
//send request to the server
req.send();

//accessing the retrived data
req.onload = function()
{
    let data = JSON.parse(this.response);
    document.write(data.messages);
}

// var request = new XMLHttpRequest()
// var url_string = 'https://dog.ceo/api/breeds/list/all';

// request.open('GET',url_string , true)
// request.send();

// request.onload = function() {
 
//     var data = JSON.parse(this.response);
//     document.write(data.messagea);
   
// }