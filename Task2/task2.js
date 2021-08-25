Task:/*
2. 
4. You can declare a variable by typing let name;. What is the value of name?
Weekend Challenge
1. Write a program that takes a string and returns the number of words in the string.

*/

let quote=`"You miss 100% of the shots you don’t take. –Wayne Gretzky'"`
console.log(quote)




const wordCount= (str)=>{
    return str.match(/(\w+)/g).length
}
console.log(wordCount("I hate Cats"))