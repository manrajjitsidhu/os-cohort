const fs = require("fs");
data="sup boys"
fs.writeFile('week-2/01-async-js/easy/4-write-to-file.txt',data, function(err){
console.log(err);
})
