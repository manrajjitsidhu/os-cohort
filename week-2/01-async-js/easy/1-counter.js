let counter =0;
let interval = setInterval(
  function(){
    console.log(counter);
    counter++;
    if(counter==10){
      clearInterval(interval);
    }
  },1000
);