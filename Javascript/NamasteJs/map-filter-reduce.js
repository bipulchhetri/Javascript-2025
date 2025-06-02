// const arr=[2,3,5,1,7]

// Map 
// const output= arr.map((x)=>x*2);
// console.log(output)


// const output1=arr.map((x)=>x*3)
// console.log(output1)
// console.log(arr)

// ********

// filter odd values

// function isOdd(x)
// {
//     return x%2;
// }

// function isEven(x)
// {
//     return x%2===0;
// }
// const output=arr.filter(isOdd)
// console.log(output)

// const output=arr.filter(isEven)
// console.log(output)

// const output=arr.filter((x)=>x%2);
// console.log(output)


// Reduce *****
const arr=[2,3,5,1,7]

function finMax(arr)
{
    let max=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max = arr[i];
        }
            
    }
    return max;
}
// console.log(finMax(arr))

const output=arr.reduce(function(acc,curr)
{
if(curr>acc)
{
    acc=curr;
}
return acc;
},0)
console.log(output)


