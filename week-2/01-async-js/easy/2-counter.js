let counter =0;
function count (){
if( counter<=15){
  console.log(counter);
  counter++;
setTimeout( count,1000)
}}
count();