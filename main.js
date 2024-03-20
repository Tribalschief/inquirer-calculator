import inquirer from "inquirer";
const welcome = () => {
    console.log("Welcome to Calculator");
    return new Promise((res => {
        setTimeout(res, 2000);
    }));
};
await welcome();
async function askQuestion() {
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
        }
    ]);
    do {
        var answer = await inquirer.prompt([{
                type: "input",
                name: "restart",
                message: "Do you want to add more input? press y for yes and n for no",
            }]);
        const extra = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "Choose an operation",
                choices: ["Add", "Subtract", "Multiply", "Divide"],
            }
        ]);
    } while (answer.restart == "Y" || answer.restart == "y");
    switch (answers.operation) {
        case "Add":
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            break;
        case "Subtract":
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            break;
        case "Multiply":
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
            break;
        case "Divide":
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
            break;
    }
}
async function repeatedly() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continue? press y for yes and n for no",
        });
    } while (again.restart == "y" || again.restart == "Y");
}
await repeatedly();
