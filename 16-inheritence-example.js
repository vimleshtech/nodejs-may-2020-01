/*
Inheritence: to extend one class features (data members and methods) into another class 
           : child class object can access parent class data member and methods 
There are following types of inheritence:
    i. single level

                A -> B 
    ii. multi level 
                A -> B -> C ... -> M 
    iii. tree / hirarchical 
                A -> B, C , D -> X,Y
    iv. multiple / hybrid       : we can achive using interface  / multi-bind        
                A ,B,C  -> M 
*/

class Employee{

        //declare contructor 
        constructor(name,age){
            this.name = name;
            this.age  = age;
        }

        //to string : return name and age     
        toString(){
                return `employee detatils ${this.name} ${this.age}`
        }        
}
class Salary extends Employee{

        constructor(name,age,basic){
            super(name,age); ///call to parent class constructor 
            this.basic = basic;
        }
        compute(){

            this.hra = this.basic*.5;
            this.da = this.basic*.4;
            this.msal = this.hra+this.da+this.basic;
            this.ysal = this.msal*12;

            this.tax = 0;
            if(this.ysal<300000){
                this.tax = 0;
            }else if(this.ysal<500000){
                this.tax = (this.ysal-300000)*.05;
            }else if(this.ysal<1000000){
                this.tax = 12500+ (this.ysal-500000)*.20;
            }else{
                this.tax = 112500+ (this.ysal-1000000)*.30;
            }

        }

        toString(){

            return ` ${super.toString()}  , Msal ${this.msal} , Ysal ${this.ysal} and Tax ${this.tax}`

        }

}

class Sports extends Employee{  //tree
            constructor(name,age,playname){
                    super(name,age);
                    this.playname = playname;
                    
                    playname.length==0? this.isplay=false : this.isplay = true ;

            }
            workHours(){
                 this.isplay? this.workhours = 6 : this.workhours = 8;

            }

            toString(){
                return `${super.toString()} , workhours ${this.workhours}`
            }

}
//here Employee is parent class, and Salary is child class 

//create an object of parent class 
//let e1 = new Employee('Nitin',23);
//console.log(e1.toString())

//create an object of child class 
let s1= new Salary("Rahul",30,45000)
s1.compute()
console.log( s1.toString())

///
let sp = new Sports("Radhika",27,"Football")
sp.workHours()
console.log(sp.toString())

let sp1 = new Sports("Monika",27,"")
sp1.workHours()
console.log(sp1.toString())




