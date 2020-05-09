const fs = require('fs')

fs.writeFile("user-data.txt","data.....",(msg)=>{

    if(msg) //if error 
        console.log(msg)
    else 
        console.log('data is saved')
});





