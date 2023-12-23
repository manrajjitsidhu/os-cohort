function clock() {
  let dateTime= new Date();

  let time = dateTime.toLocaleTimeString();

  console.log(time)

   setTimeout(clock, 1000);
}

clock();