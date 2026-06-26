// setTimeout(function() {
//   for (var i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }, i * 1000); // ❌ CRASHES HERE: 'i' does not exist in this scope yet!
// Use code with caution.The Execution Breakdown:JavaScript reads setTimeout(...).To set the timer, it looks at the second argument: i * 1000.Because i is declared inside the callback function's loop, the outside world has no idea what i is.JavaScript throws a ReferenceError: i is not defined before the timer can even be scheduled.

function x(){
    for(var i=1;i<=5;i++){
        function y(i){
            setTimeout(function(){
                console.log(i)
            },i*1000)
        }
        y(i)
    }
}
x()