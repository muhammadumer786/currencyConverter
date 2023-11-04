#! /usr/bin/env node
import inquirer from 'inquirer';
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0030,
        "PKR": 1,
        "KWD": 0.0011
    },
    "GBP": {
        "USD": 1.22,
        "GBP": 1,
        "PKR": 334.15,
        "KWD": 0.38
    },
    "USD": {
        "USD": 1,
        "GBP": 0.82,
        "PKR": 275,
        "KWD": 0.31
    },
    "KWD": {
        "USD": 3.24,
        "GBP": 2.67,
        "PKR": 900.90,
        "KWD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP", "KWD"],
        message: "select your first currency from"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP", "KWD"],
        message: "select your second currrency to"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount: "
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} = ${result}`);
}
else {
    console.log("Invalid input");
}
