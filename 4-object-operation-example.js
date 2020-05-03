var sales =[1111,54,677,33,76,3433333,66]

console.log(sales);
//length
console.log(sales.length);

//push
sales.push(100)
console.log(sales)

//pop
sales.pop()
console.log(sales);

//shift
sales.shift()
console.log(sales)

//unshift
sales.unshift(30);
console.log(sales);

//slice
s = sales.slice(2,6);
console.log(s)
console.log(sales);

//splice : remove
sales.splice(2,3)
console.log(sales);


//forEach : iterate
//get sum
var sum =0;
sales.forEach(r=>{   //arrow function/fat function 
    console.log(r);
    sum+=r;
})

console.log('total is ',sum);


//sort in asc
a =['nitin','aman','rahul','jyoti',"jasmeet"]
a.sort()   //sort the string 
console.log('asc ',a);
//reverse  : print last value to first 
a.reverse()
console.log('in desc ',a)

//sort the number -- in asc 
/*
a-b
22-10 = 12          1   
10-22 = -12         -1
10-10 = 0           0 
*/
sales.sort((i,j)=>i-j); 
console.log('in asc ',sales);

//sort the number -- in desc
sales.sort((i,j)=>j-i); 
console.log('in desc ',sales);

//filter 
console.log(sales);
out = sales.filter(d=>d%2==0);
console.log(out);


out = sales.filter(d=>d>1000);
console.log(out);




