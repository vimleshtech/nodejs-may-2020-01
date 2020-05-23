
//Encapsulation 
class Employee{

    constructor(name,salary){

            this.name = name;
            this.salary  =salary;
    }

    add_country(country){
        this.country  = country;

    }
    getDetails(){
        console.log(`Employee data ${this.name} and ${this.salary} ${this.country}`)
    }

}

let e1 =new Employee("Raman",45000)
e1.add_country("India")
e1.getDetails()

