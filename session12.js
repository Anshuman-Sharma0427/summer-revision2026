// function x(){
//     // var a = 12
//     function y(){
//         console.log(a)
//     }
//     // var a = 13
//     let a = 23
//     return y()
// }
// x()
// var z = x()
// console.log(z)
// z()
// x()()

// function outest() {
//     function outer(b) {
//         var a = 12
//         function inner() {
//             console.log(a, b)
//         }
//         return inner
//     }
//     return outer(23)
// }
// console.log(outest())
// outest()()

// function outest() {
//     function outer(b) {
//         var a = 12
//         function inner() {
//             console.log(a, b)
//         }
//         return inner
//     }
//     return outer(23)
// }
// console.log(outest())
// console.log(outest()())
// outest()(23)()

// function outest() {
//     var c = 20
//     function outer(b) {

//         function inner() {
//             console.log(a, b , c)
//         }
//         //let a = 23
//         return inner
//     }
//     return outer
// }
// let a =100
// var close = (outest())("hello world");
// close()

// Data hiding and encapsulation
// var counter = 0 ;
// function increamentCounter(){
//     counter++
//     console.log(counter)
// }

// increamentCounter()

// function Counter(){
//     var count = 0;
//     function incrementCounter(){
//         count++
//         console.log(count)
//     }
//     return incrementCounter
// }
// console.log(Counter())
// var counter1 = Counter()
// counter1()
// counter1()

//-----------------------------------------------------------------
// Constructor function
// function Counter(){
//     var count = 0
//     this.incrementCounter = function(){
//         count++;
//         console.log(count)
//     }
//     this.decrementCounter = function(){
//         count--;
//         console.log(count)
//     }
// }
// var a = new Counter()
// This is a constructor function so we will use new keyword here with keeping the name with capital letter as a good convention
// a.incrementCounter()
// a.decrementCounter()

// disAdv of closures
// There could be overconsumption of memory , those closed variables are not garbage collected till the program expires, And if not handled properly then it could lead to memory leaks and it could also freeze the browser if not handled properly

//-----------------------------------------------------------------

// Garbage collector---- is like a program in j.s engine or in browser which kind of freeze the unutilised memory

function a(){
    var x = 0 , z = 9
    return function b(){
        console.log(x)
    }
}
var y = a()
y()
// here the function b forms a closure with variable x and z both but we know that there is no use of z inside func.b so b is smartly garbage collected abd this smart garabge collection feature is provided in today's modern world browser or j.s like V8 , chrome otherwise there is more consumption of memory.