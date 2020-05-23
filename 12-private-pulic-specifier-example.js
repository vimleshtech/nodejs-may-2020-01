/* there is no private member - every member,function is public */
var employee={

    config: {

            country:'india',
            ageLimit:18,
            instructions:'https://www.test.com'
    },
    init: function(){

            console.log(this.config);
    },
    computeSalary : function(basic){

        var  tax =0;
        if(this.config.country=='india'){
            tax = basic*.20;
        } 

        console.log(tax);
    }
}

//call or access 
console.log( employee.config)
employee.init()
employee.computeSalary(100)
employee.config.country='us';
employee.computeSalary(1000)


/* create private and public data member and function */
var Person = function ( name ) {
    // Do some stuff here    
    var id =11;
    var country ='nitin';

    var add=function(a,b){
        console.log(a+b);
    }
}


//call to acces to data member and function 
var  o = new Person("Radhika");
//o.id=110;
//o.add(11,33);


/* Right solution */



// Person Module
var Person = function ( name ) {
    
    // Private variables and functions that only
    // ..other private or public functions may access
    // ..and cannot be accessed outside this Module
    var age       = 0,
        maxAge    = 30,
        maxWeight = 80,
        isAlive   = true,
        weight    = 20,
        name      = name || 'Un-named';
    
    var growOld = function () { 

        if ( age++ >= maxAge ) {
        
            die();

        }
    }
    var gainWeight = function () { 
        weight++;
        if ( weight >= maxWeight ) {
            die();
        }
    }

    var loseWeight = function () { 
        weight--;
        if ( weight <= 0 ) {
            die();
        }
    } 

    var die = function () { isAlive = false; }
    

    // All the properties and methods contained by 
    // ..this object being returned will be public
    // ..and will be accessible in the global scope.
    return {
        speak : function () { 
            if ( !isAlive ) {
                console.log('Dead man can\'t speak.');
                return;
            }

            console.log('Speaking...');
            growOld(); 
        },

        walk : function () { 
            if( !isAlive ) {
                console.log('Dead man can\'t walk');
                return;
            }

            console.log('Walking'); 
            growOld(); 
            loseWeight(); 
        },

        eat : function () {
            if ( !isAlive ) {
                console.log('Dead man can\'t eat');
            }
            gainWeight(); 
        }
    }
}

//
var o = new Person("Rohit");
o.speak();



