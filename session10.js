// var a = 10;
// function x() {
//     var x = 1234;
//     function y() {
//         console.log(x)
//     }; y()
// };
// x()
// console.log(a)

// Closures in J.S ---- functions along     ith its lexical scope is known as closure..


// function x() {
//     var a = 1234;
//     y()
// };
// x(function y() {
//     console.log(a)
// }).  ----   doubt


// function x() {
//     var a = 1234;
//     return function y() {
//         console.log(a)
//     }; //return y()
//     // return y 
// };
// // console.log(x)
// var z = x()
// console.log(z)
// z()


//DOUBTTTTTTTMKJHGFDXCVBNJKJHGF/";[]"
// function z() {
//     var a = 1234;
//     function x() {
//         a = 100;
//         function y() {
//             console.log(a)
//         }; //return y()

//         return y()
//     };
//     return x()
// };
// // console.log(x)
// var b = z()
// console.log(b)

function z() {
    var b = 900;
    function x() {
        var a = 7;
        function y() {
            console.log(a,b)
        }; //return y()

        y()
    };
     x()
};
z()

