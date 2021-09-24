// 1) Group instructions on Lines 4-7 below into a new function.
// 2) Convert the "x" and "y" variables into parameters which
//      will receive numbers from outside the function.
let x = 5;
let y = 2;
function calc(x, y){
let product = x * y;
console.log(x + " * " + y + " = " + product);
};

calc();
calc(10,12);
calc(5,8);
calc(3,5);

// 3) Call your new function below 3 separate times with
//      different supplied x's and y's
