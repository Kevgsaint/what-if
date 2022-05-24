const prompt = require("prompt-sync")({sigint: true});

let num = Number(prompt("Choose a number"));
if (num%3 == 0){
    console.log("fizz")
} if(num%5 == 0) {
    console.log("buzz")
} if  (num%15 == 0){
    console.log("fizzbuzz")
}