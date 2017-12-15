const fs = require('fs')
fs.readdir('./demo',function(err,data){
    console.log(data)
})