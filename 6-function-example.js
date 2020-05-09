/*
Function: is set of command or statement which can be reused
Syntax to declare the function 
    1. 
    function fun_name(){

     }
     2. anonymis function 
     fun_name=()=>{

     }   
Types of function :
    - no argument no return 
    - no argument with return
    - argument with no return 
    - argument with return 

Other type of functions;
     - recurrsion       : function which invoke of call itself i.e. called recussive function 
     - callback 
*/
//Syntax to declare the function 
function wel(){
    console.log('welcome to function world ....')
    console.log('we are learning about function ....')

}
//or
welcome=()=>{
    console.log('welcome to function world ....')
    console.log('we are learning about function ....')
}

//- no argument no return 
test=()=>{
    console.log('in test function ')
}
//- no argument with return
getDate=()=>{
    console.log('in test function ')
    return new Date()
}

//- argument with no return 
add=(a,b)=>{
    var c =a+b;
    console.log(c)
}
//- argument with return 
mul=(a,b)=>{
    var c =a*b
    return c;
}

// recurrsion 
//example : calculate the factorial 
fact =(n)=>{
    if(n==1)
        return n;
    else 
        return n* fact(n-1); //6 * 5 * 4 * 3* 2 *1

}
//call to function 
wel()
welcome();
test()
d = getDate()
console.log(d);


add(11,4)

var out = mul(11,4);
console.log(out)


f = fact(6)
console.log(f)

//Q. wat to get sum 

// var n= [11,33,5,67,333,[11,44,6,77,3,[222,5,66],444],55,66,33,"fff",555]

//callback
fun1=()=>{

    console.log('in funciton fun1')
}

fun2=(name,callback)=>{
    
    //callback will take reference of method /function 
    console.log('you name is  '+name);
    callback() ;// 
}
    

///call to fun2
fun2("Nitin",fun1);



