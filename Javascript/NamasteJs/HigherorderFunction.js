// function x()
// {
//     console.log("hello higher order function")
// }

// function y(x)
// {
//     x();
// }
// y(x);

const radius=[3,2,4];

const area=function(radius)
{
    return Math.PI*radius*radius
}
const circumference=function(radius)
{
    return 2*Math.PI*radius;
}

const calcluate=function (radius,logic)
{
    const output=[];
    for(let i=0;i<radius.length;i++)
    {
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calcluate(radius,area))
console.log(calcluate(radius,circumference))