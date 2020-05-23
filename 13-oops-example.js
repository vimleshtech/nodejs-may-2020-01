
//// <ES6
///Create Object Literal 
let employee ={
    //data members
    fname:'Raman',
    lname:'Sinha',
    age:29,
    //methods or function 
    getUser : function(){

        return `Employee Details is ${employee.fname} ${employee.lname} and age is ${employee.age}`
    },
    address:{
        country:'india',
        state:'delhi',
        address:'Janak Puri, New Delhi'
    }
}
//accces to object data 
console.log(employee.getUser())
console.log(employee.address.country)

//////////////////////////////////////////////////////
//Object with Constructor 
//////////////////////////////////////////////////////
function user(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
}

let u1 = new user('Raman','Sinha',20)
let u2 = new user('Nitin','Pandey',30)
let u3 = new user('Monika','Sharma',40)

console.log(u1.fname, u1.age, u1.lname)
console.log(u3.fname, u3.age, u3.lname)
console.log(u2.fname, u2.age, u2.lname)

//////////////////////////////////////////////////////
//////////// Object.create() method 
//////////////////////////////////////////////////////
const student = {

        age:18,
        //name:'rahul',
        getData : function(){
                console.log(`name is ${this.name} and age is ${this.age}`)

        }
}

let o1 = Object.create(student);
//o1.getData()
o1.name ='Raman'
//o1.age =29;
o1.getData()


////////////////////////
/////////// ES6+ 
////////////////////////
class Employee{
    constructor(fname,lname,age){
            this.fname = fname;
            this.lname = lname;
            this.age = age;
    }

    getData(){
        return `employee details : ${this.fname} ${this.lname} and ${this.age}`
    }

}

let e1 = new Employee("Nitin","Sharma",33);
let e2 = new Employee("Mohit","Pandey",23); 
console.log(e1.getData())
console.log(e2.getData())

/////////////////////////////////////
/////////// Traditional /////////////
/////////////////////////////////////
function Students(fname,lname,age){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
}

Students.prototype.getDetails() = function(){
    console.log('data is '+this.fname);    
}

let b1 = new Students("Radhika","Sinha",27);
console.log(b1.name)
console.log(b1.getDetails())





