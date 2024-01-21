

import inquirer from "inquirer";


let user = await inquirer.prompt ([{

    type: "number",
    name: "num1",
    message: "Enter your first number"
}, {
    type: "number",
    name: "num2",
    message: "Enter your second number"
}, 
{
    type: "list",
    name: "operator",
    message: "Select your operator",
    choices: ['Add', 'Sub', 'divide', 'Multiply']
}])

if (user.operator === "Add") {
    console.log(user.num1 + user.num2);
}
   else if (user.operator === "Sub") { 
    console.log(user.num1 - user.num2);
}

    else if (user.operator === "divide") { 
    console.log(user.num1 / user.num2);
}

    else if (user.operator === "Multiply") { 
    console.log(user.num1 * user.num2);
}

console.log(user);  // optional




