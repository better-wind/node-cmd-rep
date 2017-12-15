var inquirer = require('inquirer');
var meta = require('./meta')
var questions = [
    {
        type: 'input',
        name: 'Name',
        message: "What's your name"
    }
];
module.exports = function(src,des){
    return new Promise((resolve)=>{
        inquirer.prompt(questions).then(answers => {
            meta(answers,src,des)
                .then(()=>{
                    resolve()
                })
        });
    })

}
