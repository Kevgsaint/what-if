 const prompt = require("prompt-sync")({sigint: true});
let age = Number(prompt("Enter your age:"))
          console.log(age);


if (age < 16){
    console.log("You are underage") ;
} 

else if (age === 16) {
    console.log("You can drive but not vote") ;
}
  
 else if (age === 17) {
    console.log("You can vote but not rent a car") ;
}
  
 else if (age <= 24) {
    console.log("You can do anything") ;  
} 
 
else if (age > 25) {
    console.log(" You can do anything")
}



