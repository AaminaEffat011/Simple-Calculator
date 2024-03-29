#! /user/bin env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([{ messege: "Enter first number", type: "number", name: "firstNumber"},{messege: "Enter Second number", type: "number", name: "secondNumber" }, { messege: "select one of the operators to perform action", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Multipilication", "Division"], }]); 
console.log(answer);
// conditional statement
if ( answer.operator==="Addition") { console.log (answer.firstNumber + answer.secondNumber);} else if (answer.operator==="subtraction"){console.log(answer.firstNumer - answer.secondnumber);} else if (answer.operator==="Multipilication") { console.log (answer.firstNumber * answer.secondNumber);}else if (answer.operator==="Division"){console.log(answer.firstNumber / answer.secondNumber);}else {console.log ("please walid operator")}