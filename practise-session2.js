//Closures-- A closure is a function bundled together with references to its surrounding state, known as its lexical environment.This allows an inner function to access and remember variables from its outer (parent) scope, even after the parent function has finished executing

// function a(){
//     var x = 4;
//     function b(){
//         console.log(x)
//         return x 
//     };
//     return b
// }
// a()
// var y = a()
// console.log(y)
// console.log(y())
// y()
// now we know that func b is a nested function and has a different and we can't access it it directly out of his scope but we did it here, so now we have func b outside its scope stored in variable y.
// so this is closure that even you know that the execution of that func a is finished after line number 11 but still func b remember it's lexical parent variables which he can access it and this is what we call closures.

// Another example
// var n = 100;
// function x(){
//     var a = 67
//     function y(){
//         var b = 99
//         function z(){
//             var c = 10
//             function u(){
//                 console.log(n,a,b,c)
//             }
//             return u
//         }
//         return z
//     }
//     return y()
// }
// var t = x()
// console.log(t)
// var i = t()
// console.log(i)
// t()()

//The Default Rule: In JavaScript, if a function does not explicitly use the return keyword, it automatically returns undefined by default.

// function x(){
//     function y(){
//         setTimeout(function(){
//             for(var i=1 ; i<=5 ; i++){
//                 console.log(i)
//             }
//         },i*i)
        
//     }
//     return y()
// }
// x()

