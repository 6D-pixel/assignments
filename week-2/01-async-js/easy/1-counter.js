let counter = 0;
// setInterval(console.log(()=>counter++),1000)
function time(counter) {
  counter++;
  console.log(counter);
}

setTimeout(time, 1000, counter);
