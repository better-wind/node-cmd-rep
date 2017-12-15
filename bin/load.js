const download = require('download-git-repo')
const path = require('path')
const fs = require('fs')

const rm = require('rimraf').sync
var quirer = require('./quirer')
module.exports = function(target,src){
    return new Promise((reslove)=>{
        download('github:luyi10year/clone-rep',
            target, { clone: true }, (err) => {
                if(err) {
                    console.log(err)
                    return false
                }
                quirer(target,src)
                    .then(()=>{
                        rm(target)
                        reslove()
                    })
            })
    })

}


