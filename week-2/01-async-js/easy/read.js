const fs = require("fs");
fs.readFile("D:/100xdev/assignments/week-2/01-async-js/easy/a.txt", "utf8", (err, data) => {
  if(err){
    console.error(err)
    return;
  }
    console.log(data);
});
let i=0
while(i<1000){
    console.log(i)
    i++
}