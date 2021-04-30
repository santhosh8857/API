//creating a varaible to store a XMLHttpRequest Object
let req= new XMLHttpRequest();
let city_name=prompt('Enter the city name')
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=c618af2d679d7198ff38c6a36ac6ca23`
//let url = prompt("Enter the URL");

//initializing the request
req.open('GET',url,true);
//send request to the server
req.send();

//accessing retrived data
req.onload = function()
{
    //storing the retrived data into the variable
    let reqData = JSON.parse(this.response);
    console.log(reqData);
}