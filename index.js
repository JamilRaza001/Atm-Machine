#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let AccountBalance = 10000;
let PinCode = 1234;
let EnterPin = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.bold.blueBright("Enter your pin code"),
    },
]);
if (EnterPin.pin === PinCode) {
    let options = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: chalk.bold.greenBright("Select an option"),
            choices: ["Withdraw", "Balance", "Deposit", "Fastcash"],
        },
    ]);
    if (options.option === "Fastcash") {
        let FastCash = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: chalk.bold.greenBright("Select an option"),
                choices: [1000, 5000, 10000, 15000],
            },
        ]);
        if (FastCash.fastCash === 1000) {
            console.log(chalk.yellow("Your Account Balance:"), chalk.blue.bold((AccountBalance -= FastCash.fastCash)));
        }
        else if (FastCash.fastCash === 1000 && 1000 > AccountBalance) {
            console.log(chalk.red.bold("Insufficient Funds"));
        }
        else if (FastCash.fastCash === 5000) {
            console.log(chalk.yellow("Your Account Balance:"), chalk.blue.bold((AccountBalance -= FastCash.fastCash)));
        }
        else if (FastCash.fastCash === 5000 && 5000 > AccountBalance) {
            console.log(chalk.red.bold("Insufficient Funds"));
        }
        else if (FastCash.fastCash === 10000) {
            console.log(chalk.yellow("Your Account Balance:"), chalk.blue.bold((AccountBalance -= FastCash.fastCash)));
        }
        else if (FastCash.fastCash === 10000 && 10000 > AccountBalance) {
            console.log(chalk.red.bold("Insufficient Funds"));
        }
        else if (FastCash.fastCash === 15000 <= AccountBalance) {
            console.log(chalk.yellow("Your Account Balance:"), chalk.blue.bold((AccountBalance -= FastCash.fastCash)));
        }
        else if (FastCash.fastCash === 15000 && 15000 > AccountBalance) {
            console.log(chalk.red.bold("Insufficient Funds"));
        }
    }
    else if (options.option === "Withdraw") {
        let OtherAmount = await inquirer.prompt([
            {
                name: "otherAmount",
                type: "number",
                message: "Please enter your amount",
            },
        ]);
        if (OtherAmount.otherAmount < AccountBalance) {
            console.log(chalk.yellow("Your Account Balance:"), chalk.blue.bold((AccountBalance -= OtherAmount.otherAmount)));
        }
        else {
            console.log(chalk.red.bold("Insufficient Funds"));
        }
    }
    else if (options.option === "Balance") {
        console.log(chalk.yellow("Your Account Balance:"), chalk.blue.bold(AccountBalance));
    }
    else if (options.option === "Deposit") {
        let deposit = await inquirer.prompt([
            {
                name: "Debit",
                type: "number",
                message: chalk.green.bold("Enter your amount"),
            },
        ]);
        console.log(chalk.yellow("Your Account Balance:"), chalk.blue.bold((AccountBalance += deposit.Debit)));
    }
    else {
        console.log(chalk.yellow("Your Account Balance:"), chalk.green.bold(AccountBalance));
    }
}
else {
    console.log(chalk.bold.redBright("Your entered wrong code"));
}
