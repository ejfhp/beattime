var date = new Date();
console.log("UTC hours: ", date.getUTCHours());
console.log("Time zone: ", date.getTimezoneOffset());
var hour = date.getUTCHours() + 1;
var min = date.getMinutes();
var sec = date.getSeconds();
console.log("Hour: ", hour, ", Mins: ", min, ", Seconds: ", sec);
var beat = (sec + (min * 60) + (hour * 3600)) / 86.4;
console.log("Beat time of now:", date, " is: ", beat);
