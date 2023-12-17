const fs = require('fs')

let content='';

fs.readFile('./a.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
        return
    }
    content = data.replace(/\s+/g, ' ').trim();
})

fs.writeFile('./a.txt',content, err=>{
    if(err){
        console.error(err)
    }
    console.log(content)
})
