//json : javascript object notation 

var users ={name:'nitin',gender:'male',age:29}
//var s =[] //array 
//var s ={} //json 

//print json as it is
console.log(users);

//access attribuate /key
console.log(users.age)
console.log(users.name)


//parsing : convert json object to string 
str =JSON.stringify(users)
console.log(str)
console.log(typeof str)

//convert str to json  object 
console.log(JSON.parse(str))

///json inside object
var data =  [{name:'nitin',gender:'male',age:20},
                {name:'amaan',gender:'male',age:29},
                {name:'monika',gender:'female',age:31},
                {name:'kshitiz',gender:'male',age:27}]


console.log(data);


//add new row 
data.push({name:"raman",gender:'male',age:25})

console.log(data);

//filter row 
var nd = data.filter(row=> row.gender=='female');
console.log(nd);


nd = data.filter(row=> row.age>25);
console.log(nd);


//adn condition 
nd = data.filter(row=> row.age>25 && row.gender=='female');
console.log(nd);

//sorting  : 
//localeCompare : compare the string  
var sort = data.sort((x,y)=> x.name.localeCompare(y.name))  // in acending 
console.log(sort);

//in descending 
var sort = data.sort((x,y)=> y.name.localeCompare(x.name))
console.log(sort);


//sort by number 
var sort = data.sort((x,y)=> x.age - y.age)// in asc 
console.log(sort);


//sort by number 
var sort = data.sort((x,y)=> y.age - x.age)  // in desc 
console.log(sort);


