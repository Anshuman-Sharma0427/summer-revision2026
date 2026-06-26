// Shortest javascript program
var a = 10;
function b (){
    var x = 7;
    console.log(x)
};
console.log(window.a);
console.log(a)
//Actually window is a global object and a is attached to it , so to access the  information inside the object we use this method.
//Also if we don't use this "window" word then j.s will by default or automatically will assume that u are reffering to the global space.

// console.log(b())
// b()

console.log(this.a)