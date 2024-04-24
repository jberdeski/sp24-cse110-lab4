function printTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
/*calls printTime every 1000 miliseconds (1 second)*/
setInterval(printTime, 1000);
