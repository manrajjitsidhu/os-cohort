const fs = require("fs");
fs.readFile('week-2/01-async-js/easy/3-read-from-file.md','utf-8',function(err,data){
  console.log(data);
  //console.log(process.cwd());
})

console.log("sync log here");