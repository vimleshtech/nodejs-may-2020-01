

//npm install csvjson
//npm install jsonstream

const csvjson = require('csvjson');
const readFile = require('fs').readFile;
const writeFile = require('fs').writeFile;

const FileConverter = {

    jsonToCSV : (src,to)=>{

                        readFile(src, 'utf-8', (err, fileContent) => {

                                        if (err) {                                            
                                            throw new Error(err);
                                        }

                                        //CREATER HEADER 
                                        const csvData = csvjson.toCSV(fileContent, {
                                            headers: 'key'
                                        });

                                        //SAVE TO CSV 
                                        writeFile(to, csvData, (err) => {
                                            if(err) {
                                                console.log(err); // Do something to handle the error or just throw it
                                                throw new Error(err);
                                            }

                                            console.log('Success!');
                                        });
                    });

    }
}



module.exports = FileConverter;
