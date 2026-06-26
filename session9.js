// Block is also known as compound statement
// Block is used to combine multiple j.s statements into one group
// if(true) true;
// if(true) console.log("hey");
// here j.s expects one line after if statement but if we have to use multiple logic or condition statements then we have to write multiple line but there is only one line is allowed after the if condition then we use this '{}' curyly braces and this means block in which we can write multiple lines which are going to be treat like single line by j.s engine.


// var a = 10000;
// let b = 9
// {
//     var a = 5;
//     let b = 10;
//     b = 3456789;
//     const c = 100;
//     console.log(b)

// }
// a = 4567;
// console.log(a) 
// console.log(b)
// the above value a=10000 is shadowed by the next value of a and this 5 is shadowed by 4567.
//same shadowing is done with variable b but as you can see this is done inside the block and can't be done outside the block with that variable beacuse we can access the var keyword outside the block but this can't be done with let and const. Also shadowing can't be done with const keyword.

//console.log(b) ---- As we know that the variables and functions inside any block are not accessible outside it. that's we this line gives us reference error. But not the same case with var keyword because it is always stored in the global space. 

// let x = 4;
// const y = 10;


// function a(){
//     var f = 10;}

//console.log(f)---so in easy language we can say that var does not become or not get attached to the global scope in one case that is when it is used inside a function. That's why this line gives me reference error.

// var a = 100;
// function x(){
//     var a = 99;
//     console.log(window.a)
//     window.a = 1000;
//     console.log(a)
    
// }
// x()
// console.log(a)



// let a = 10;
// console.log(a)
// You can shadow a let using another let but can't shadow using a var. like see

// let b =10;
//{//var b =99;-- this can't be done because for to shadow let we have to use anopther let because var is always global excluded in one case only.
   // let b = 99;
   // console.log(b) now this block let shadow the global let(not global have a different memory but to understand we say global) }
    
//console.log(b) --- but as we put debugger and when this block completes then the access of variable and functions inside the block is also get restricted and then this global let can't shadowed by the block let.

// One thing alwys keep in your mind that when you're shadowing something then it should not cross its scope  boundries.

// var x = 99;
// {
//     let x =9000;

// }

// let g = 100;
// function j(){
//     var g = 999;}
// this is legal because var is function scope we know that. As a metaphor we can say that these let and var are not going to cross their paths.

/////////////////////////////////////////////////////////////////
const a =10000;
{
    const a = 1000;
    {
        const a = 999;
        console.log(a)
    };console.log(a)
}
console.log(a)

const c =10000;
{
    const c = 1000;
    {
        console.log(c)
    };console.log(c)
}
console.log(a)

const b =10000;
{ console.log(b)
    {
        console.log(b)
    }
}
console.log(b)