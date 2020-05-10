//npm install request
const request = require('request');
const fs = require('fs')
/*
API Methods:
    GET
    POST
*/
saveToFile=(path,data)=>{

    data = JSON.stringify(data);
    fs.writeFile(path,data,(er)=>{
            if (er)
                console.log(er)
            else 
                console.log('data is save to file')
    })
}
fetchData=()=>{
   request.get('https://jsonplaceholder.typicode.com/todos',(er,res,body)=>{

                if(er)
                    console.log(er);
                else{
                    //console.log(typeof body)  
                    //console.log(JSON.parse(body)) 
                    //console.log(res)  
                    saveToFile("user-data.json",JSON.parse(body))
                }
        })
}

//call to function 
fetchData()

