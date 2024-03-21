#!/usr/bin/env node
import inquirer from "inquirer";
const welcome = () => {
    console.log("Welcome to Calculator");
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
};
welcome();
async function askQuestion() {
    let extra_num = 0;
    const answers = await inquirer.prompt([
        {
            type: "number",
            name: "num1",
            message: "Enter first number",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter second number",
        },
    ]);
    let extra;
    do {
        extra = await inquirer.prompt([
            {
                type: "input",
                name: "restart",
                message: "Do you want to add more? press y for yes and n for no",
            },
        ]);
        if (extra.restart.toLowerCase() === "y") {
            const add_more = await inquirer.prompt([
                {
                    type: "number",
                    name: "num",
                    message: "Enter extra number",
                },
            ]);
            extra_num += add_more.num;
        }
    } while (extra.restart.toLowerCase() === "y");
    const operation = await inquirer.prompt({
        type: "list",
        name: "operation",
        message: "Choose an operation",
        choices: ["Add", "Subtract", "Multiply", "Divide"],
    });
    let result;
    switch (operation.operation) {
        case "Add":
            result = answers.num1 + answers.num2 + extra_num;
            break;
        case "Subtract":
            result = answers.num1 - answers.num2 - extra_num;
            break;
        case "Multiply":
            result = answers.num1 * answers.num2 * extra_num;
            break;
        case "Divide":
            result = answers.num1 / answers.num2 / extra_num;
            break;
    }
    console.log(`Result: ${result}`);
}
async function repeatedly() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? press y for yes and n for no",
        });
    } while (again.restart.toLowerCase() === "y");
}
await repeatedly();
