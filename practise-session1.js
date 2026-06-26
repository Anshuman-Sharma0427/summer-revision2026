// var x = 10;
// a();
// b();
// console.log(x)
// function a(){
//     var x = 100;
//     // We know that var is function scope 
//     console.log(x)
// }
// function b(){
//     var x = 1000;
//     console.log(x)
// }

// So now as you see the code , we know that always first a GEC is created even before the execution of any single line of code.So, GEC is pushed into the stack(only for managing the execution of codes or execution context) then a FEC of func. a is pushed and then FEC of func. b is pushed and then the function b completes and pop out and same with a and GEC moves to line number 6 and after that it will also get poped out of the call stack.

var x = 10;
b();
function a(){
    console.log(x)
}
function b(){
    a()
}
// So j.s engine will always first look or find out the value of any variable in the local memory. And what is this local memory that the memory component which is created in the first phase of execution context.




