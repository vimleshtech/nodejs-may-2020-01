/*
Javascript doesn't provide access specifier 
*/
function User(fname,lname){
    
    let firstname =fname; //private members 
    let lastname = lname;  //private members 

    let details = function(){  //private function 

        return `Name is ${firstname} ${lastname}`
    }
    this.access_details = function(){ //bind with this to make it public or global 
        return `User details ${firstname} ${lastname}`
    }

}
//create object and accesss data members and function 
let u1 = new User("Rahul","Sharma");
console.log(u1.firstname)
console.log(u1.details)
console.log(u1.access_details())

