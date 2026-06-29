//function statement
//function expression
a();
// console.log(b())
// c()


function a(){
    console.log("hey")
}
var c = function b(){
    console.log("hello")
}

// The major diff. btw func. statement and expression is just hoistiong.And func. statement is also known as func. declaration.

//...

//anonymous func. - A function without a name. ex - function(){}. here the function has no name 
//function(){} - will give a syntax error 
// Advantages - used in a place where a func. used as a value like in function expression.
var a = function (){
    console.log("hey")
}
    // this is valid

//...

// functions are first class citizens.
// First Class Function - the ability of a function to be used as values and can be passed as an argument to another funvtion and can be returned from the function.

var c = function(h1){
    console.log(h1)
    console.log(h1())
    h1()
}
c(function(){
    console.log("hey")
    return 23
    
})

// if we use let or const instead of var keyword , it behaves the same way just like they do , they re in temporal dead zone until they encounter the statement.

//...
//Named function expression -- just giving name to the function in function expression ex - var a = function xy(){}

