import inquirer from "inquirer";
let myBalance = 10000; //dollar
let myPin = 2005;
let pinAnswer = await inquirer.prompt([
    { name: "pin",
        message: "Enter your pin code",
        type: "number", }
]);
console.log(pinAnswer.pin);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code !!!");
    console.log("Your current balance is:" + myBalance);
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one option",
            type: "list",
            choices: ["withdraw your Amount", "check balance"]
        }
    ]);
    if (operationAnswer.operation === "withdraw your Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount which you like to withdraw:",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Unable to process transaction! your total balance is:" + myBalance);
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} with draw sucessfully`);
            console.log(`Your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(`Your Account balance is:${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code!");
}
