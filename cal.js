import inquirer from "inquirer";
let { num1, num2, Operator } = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter 1st Number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter 2nd Number:"
    },
    {
        name: "Operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: "Enter your Age:"
    },
]);
// let age2:number=10; 
// async function (){
//     let answers = await inquirer.prompt([{
//         name: "age",
//         type: "number",
//         message: "Enter your Age:"}
//     ]);
// }
// console.log (chalk.bgGreenBright(answers.age));
// console.log (answers);
if (Operator === "+") {
    console.log(`The sum of two number = ${num1 + num2}`);
}
else if (Operator === "-") {
    console.log(`The difference of two number = ${num1 - num2}`);
}
else if (Operator === "*") {
    console.log(`The multiplication of two number = ${num1 * num2}`);
}
else if (Operator === "/") {
    console.log(`The divison of two number = ${num1 / num2}`);
}
// console.log("Insha Allah, in " + (60 - answers.age) + " years you will be 60 years old.");
