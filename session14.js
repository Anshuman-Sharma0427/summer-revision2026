// Callback Function
// function x(p1){
//     console.log(p1)
//     console.log(p1())
//     p1()
    
// }
// x(function (){
//     console.log("hello world")
//     return "hello"
// })

//.....

// setTimeout(function(){
//     console.log("hey")
// },5000)

// function x(y){
//     console.log("x")
//     y()
// }
// x(function y(){
//     console.log("y")
// })
// doubt - how setTiemout is called like how take example of for loop using var and let from session 11.

//.....

// function x(p){
//     // console.log("web-dev")
//     console.log(p)
//     p(function z(b){
//         console.log(b)
//     })
// }
// x(function y(a){
//     console.log(a)
//     a(56)
// })

//.....

// let count = 0
// document.getElementById("clickMe").addEventListener("click", function xyz(){
//     console.log("hello world" , ++count)
// })

function attachEventListener(){
    let count = 0
    document.getElementById("clickMe").addEventListener("click", function xyz(){
    console.log("hello world" , ++count)
})} 
attachEventListener() 