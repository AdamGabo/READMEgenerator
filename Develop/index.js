const inquirer = require('inquirer'); //add npm inquirer package
const fs = require('fs'); 
const engineCreate = require('./utils/engine.js'); 

console.log("README Generator"); 
console.log("Answer the following questions to create your very own README file"); 

//Create an Object for the questions
const commandQuestions = [
    //Project Name 
    {
    type: 'input', 
    name: 'title',
    message: 'Please enter the name of your project:',
    validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of your project');
          return false;
        }
      }
    }, 
    //Description 
    {
        type: 'input', 
        name: 'description',
        message: 'Please enter the project description:',
        validate: descInput => {
            if (descInput) {
              return true;
            } else {
              console.log('Please enter the description of your project');
              return false;
            }
          }
        }, 
    //Installation Instructions 
    {
        type: 'input', 
        name: 'instructions',
        message: 'Please enter the installation instructions:',
        validate: instalInstruct => {
            if (instalInstruct) {
              return true;
            } else {
              console.log('Please enter the installation instructions of your project');
              return false;
            }
          }
        }, 
    //Usage Information 
    {
        type: 'input', 
        name: 'usage',
        message: 'Please enter the usage information:',
        validate: usageInfo => {
            if (usageInfo) {
              return true;
            } else {
              console.log('Please enter the usage information of your project');
              return false;
            }
          }
        }, 
    //Contribution Guidelines 
    {
        type: 'input', 
        name: 'contribution',
        message: 'Please enter the contribution guidelines:',
        validate: contGuide => {
            if (contGuide) {
              return true;
            } else {
              console.log('Please enter the contribution guidelines of your project');
              return false;
            }
          }
        }, 
    //Test Instructions 
    {
        type: 'input', 
        name: 'test',
        message: 'Please enter the test instructions:',
        validate: TestInst => {
            if (TestInst) {
              return true;
            } else {
              console.log('Please enter the test instructions of your project');
              return false;
            }
          }
        }, 
    //License 
    {
        type: 'checkbox', 
        name: 'license',
        message: 'Please choose your preferred license:',
        choices: ['MIT','Apache'],
        validate: TestInst => {
            if (TestInst) {
                return true;
            } else {
                console.log('Please select the license of your project');
                return false;
            }
            }
        }, 
    //Github Username 
    {
        type: 'input', 
        name: 'github',
        message: 'Please enter the github username:',
        validate: github => {
            if (github) {
              return true;
            } else {
              console.log('Please enter the github username of your project');
              return false;
            }
          }
        }, 
    //Email Address 
    {
        type: 'input', 
        name: 'email',
        message: 'Please enter the your email, so users may ask questions about the program:',
        validate: email => {
            if (email) {
              return true;
            } else {
              console.log('Please enter your email');
              return false;
            }
          }
        }, 

];

//Write the README file 
function wFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        {
            return console.log(err);
        }
        else 
        {
            console.log("Great Success, Wah Wah Wee Wah"); 
        };
    });
};
//get r going 
function getRgoing() {
    inquirer.prompt(commandQuestions).then(function (getRdone){
        console.log(getRdone)
        wFile("README.md", engineCreate(getRdone) );
    });
};

getRgoing(); 

