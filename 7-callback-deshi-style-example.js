
add=(n1,n2)=>{
    var n =n1+n2;
    console.log(n);
}
sub=(a,b)=>{

    var c = a-b;
    console.log(c);
}

div=(a,b,callback)=>{

    if(b==0)
    {
        return "divisor cannto be 0";
    }
    var c =a/b;
    console.log(c);
    callback(a,b);
}


//
div(11,2,add);
div(11,2,sub);
console.log( div(11,0,sub));


//div(11,0);



