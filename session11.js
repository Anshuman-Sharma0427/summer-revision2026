function x(){
    var a = 10;
    setTimeout(function(){
        console.log(a);
    },3000);
    
}
x()

function x(){
    for(var i = 1; i<=5 ; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
}
x()

function x(){
    for(let i = 1; i<=5 ; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
}
x()
//The loop schedules the function to run later. The loop runs 5 times, so it successfully schedules 5 separate functions. But because they all execute after the loop has already finished and changed i to 6, all 5 scheduled functions print 6.

//Because setTimeout is asynchronous, JavaScript hands the timer to the web browser to count down, and the loop immediately jumps to the next iteration. The loop will never wait for a timer.

function x(){
    for(var i =1 ; i<=5 ; i++){
        function closure(i){
            setTimeout(function(){
                console.log(i)
            },i*1000)
        }
        closure(i)
    } 
}
x()

function x(){
    for(var i =1 ; i<=5 ; i++){
        function closure(x){
            setTimeout(function(){
                console.log(x)
            },x*1000)
        }
        closure(i)
    } 
}
x()

function x(){
    for(let i =1 ; i<=5 ; i++){
        setTimeout(function(){
            console.log(i)
        },i*1000)
    }
}
x()

// A garbage collector is an automatic background program in JavaScript that reclaims memory by finding and deleting variables or objects that your code can no longer reach or use