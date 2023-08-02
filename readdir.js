import fs from 'fs'

fs.readdir('./' ,{encoding: 'utf-8'} ,(err, files) => {
    if(err) console.log(err)

    else{
        console.log(files)
    }
})