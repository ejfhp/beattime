// (UTC+1seconds + (UTC+1minutes * 60) + (UTC+1hours * 3600)) / 86.4
let date:Date = new Date();
console.log("UTC hours: ", date.getUTCHours());
console.log("Time zone: ", date.getTimezoneOffset());
let hour:number = date.getUTCHours() + 1;
let min:number = date.getMinutes();
let sec:number = date.getSeconds();
console.log("Hour: ", hour, ", Mins: ", min, ", Seconds: ", sec);

let beat:number = (sec + (min * 60) + (hour * 3600)) / 86.4;

console.log("Beat time of now:", date, " is: ", beat);
