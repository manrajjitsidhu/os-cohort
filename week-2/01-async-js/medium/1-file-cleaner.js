const fs = require("fs");
fs.readFile('week-2/01-async-js/medium/test.txt','utf-8',function(err,data){
  data=data.replace(/\s{2,}/g, ' ').trim();
  fs.writeFile(
    'week-2/01-async-js/medium/test.txt',data,function(err){
      console.log(err);
      })}
  )
