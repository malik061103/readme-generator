// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input
const questions = [{ type: "input", name: "readmeTitle", message: "what is your readme title" },
{ type: "input", name: "readmeDescription", message: "what is you readme description" },
{ type: "input", name: "readmeInstullationinfo", message: "what the installation instructions" },
{ type: "input", name: "readmeUsageinfo", message: "how to use it" },
{ type: "input", name: "readmecontributioninfo", message: "who contribe on the project" },
{type:"list",name:"license",message:"Choose your license: ",choices:["MIT","APACHE 2.0","GPL","None"]},
{ type: "input", name: "githubusername", message: "Please enter github username" },
{ type: "input", name: "emailaddress", message: " Please enter email address" },
{ type: "input", name: "readmetestinfo", message: "how do test the project" }];


// inquirer.prompt(
//     questions
// )
//     .then((answer) => {
//         console.log(answer)
//     })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,generateMarkdown(data), (err) => {
        if (err) {
            return console.log(err)
        }
        console.log("done you can now preview")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (userInput) {
            console.log(userInput)
            writeToFile("README.md",userInput);
        });
}

// Function call to initialize app
init();
