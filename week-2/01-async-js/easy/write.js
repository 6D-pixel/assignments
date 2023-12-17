const fs = require('fs')

content = 'write to a.txt'

fs.writeFile('D:/100xdev/assignments/week-2/01-async-js/easy/a.txt',content, err=>{
    if(err){
        console.error(err)
    }
    console.log('written to a.tst')
})
