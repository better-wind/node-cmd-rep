const program = require('commander')
const path = require('path')
const down = require('./load')
var target = path.join(__dirname,'download-temp')
program.usage('<project-name>').parse(process.argv)

let projectName = program.args[0]

const fileName = path.join(__dirname,'../',projectName)

down(target,fileName)
    .then(()=>{
        console.log('Success')
    })
