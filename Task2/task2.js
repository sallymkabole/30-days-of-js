Task:/*
2. 
4. You can declare a variable by typing let name;. What is the value of name?
Weekend Challenge
1. Write a program that takes a string and returns the number of words in the string.

*/

var favoriteSong = "Floating though space by Sia";
var wordCount = favoriteSong.match(/(\w+)/g).length;
console.log(favoriteSong  + ' ' +'has'  + ' ' +wordCount  + ' ' + 'words'); //6

