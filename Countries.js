//creating a varaible to store a XMLHttpRequest Object
let req= new XMLHttpRequest();
let url='https://restcountries.eu/rest/v2/all'
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
    document.write("Data taken from restcountires");
    document.write("<hr>");
    for(let i in reqData)
    {
        document.write(`country - ${reqData[i].name}  ||  `);
        document.write(`capital - ${reqData[i].capital}<br>`);
        if(reqData[i].capital=="") continue;      
    }
}