function outer(b){
    var a = 8
    return function inner(){
        console.log(a,b)
    }
}
console.log(outer())
var a = outer(23)
a()
outer(23)()

//...

function out(){
    let a = 78
    return function inn(b){
        console.log(a,b)
    }
}
console.log(out)
console.log(out())
var x = out()
x(45)
out()(34)

//...

function outest(){
    let a = 10
    return function outers(b){
        // let b = 100
        return function inners(c){
            console.log(a,b,c)
        }
    }
}
console.log(outest)
console.log(outest())
console.log(outest()())
var x = (outest())(34)
x(23)
outest()(22)(98)

//...

function Counter(){
    var count = 0
    this.incrementCount = function(){
        count++;
        console.log(count)
    }
    this.decrementCount = function(){
        count--;
        console.log(count)

    }
}

// this is a constructor function

var x = new Counter()
x.incrementCount()
x.incrementCount()
x.incrementCount()
x.incrementCount()
x.decrementCount()
x.decrementCount()
x.decrementCount()
x.decrementCount()
x.decrementCount()

var y = new Counter()
y.incrementCount()
y.incrementCount()
y.incrementCount()
y.decrementCount()
y.decrementCount()
y.decrementCount()

//.. 

function outests(){
    function out(b){
        let a = 67
        function inn(){
            console.log(a,b)
            return [a,b]
        }
        return inn()
    }
    return out
}
// console.log(outests)
// console.log(outests())
// console.log(outests()())
var f = outests()
// f(45)
// console.log(f)
console.log(f(23))

//The Comma Operator: In JavaScript, writing a, b evaluates both variables from left to right but only returns the last one.

//Step 1: Running the inside firstBefore console.log can display anything, JavaScript must first find out what f() is. So, it runs (triggers) f().Inside your code, f() executes inn().Inside inn(), there is a line: console.log(a, b).Action: The engine immediately prints 67 45 to the screen.


// Step 2: The Hand-OffNow, f() is finished running. JavaScript goes back to the outer console.log(...).The outer console.log asks the function: "What data are you handing back to me so I can print it?"The function replies: "I don't have a return keyword, so I have no data for you."Action: Because JavaScript cannot leave an empty space, it automatically substitutes that lack of data with the keyword undefined.


// Step 3: The final printThe outer console.log now looks like this: console.log(undefined).Action: It prints undefined to the screen.SummaryYou see two lines on your screen because you have two separate console.log commands executing at two different times:The inner console.log(a,b) prints 67 45.The outer console.log(f()) prints undefined.