// Objects are one of the fundamental data stacture used to store and manage data,you can add and remove properties from 
// objects easily.

//creating objects
// object literals
const person={
    "full name":"hello",
    name:"chhetri",
    roll:"hi",
};

person.greeting=function()
{
    console.log(`hello js user ${this.name}`)
}
console.log(person.greeting())
console.log(person["full name"])