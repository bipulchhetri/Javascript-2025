// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(3,4))

// compose function
const add=x=>x+2;
const sub =x=>x-4;
const mul=x=>x-5;

const compose= function(...fn)
{
    return function (val)
    {
        return fn.reduce((pre,fn)=>fn(pre),val)
         
    }
    
}
const result =compose(mul,sub,add)(10);
console.log(result)

