// function statement
function a()
{
    console.log("a is calling");
}
a();

// function expression
var b=function(){
    console.log("b is calling");
}
b();

// **function statement and expression different ?**

// function statemnet is hoisted but expressin is not

// *** first order function

function hello()
{
    console.log("jdklsgj")
}
function callhello(ho ,message)
{
    console.log(ho()+ message)
}

callhello(hello, "jfj")

// Anonymous function
// function ()
// {
//     // function has no name is called ...
// }
// 
