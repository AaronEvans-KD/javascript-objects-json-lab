(function(){ 

const myNode = document.createElement("div");
const digialClock = document.getElementById("digital-clock");
digitalClock.appendChild(myNode);
const updateTime = function(){
const myDate = new Date();
console.dir(myDate);
myNode.innerHTML = myDate.toLocaleTimeString("en-gb", {timeStyle: "medium"});
console.info("tick tock");
const seconds = myDate.getSeconds();
const rotSeconds = seconds * 6 - 90;
secondHand.style.transform = `rotate(${rotSeconds}deg)`;
const minutes = myDate.getMinutes();
const rotMinutes = minutes * 6 - 90;
minHand.style.transform = `rotate(${rotMinutes}deg)`;
let hours = myDate.getHours();
hours = hours + minutes/60
const rotHours = (hours % 12) * 30 + (minutes / 60) * 30 - 90;
hrHand.style.transform = `rotate(${rotHours}deg)`;


};
setInterval(updateTime, 1000);
updateTime();
})();