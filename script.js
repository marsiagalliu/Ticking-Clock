var secondsDiv = document.querySelector("#seconds");
var minutesDiv = document.querySelector("#minutes");
var hoursDiv = document.querySelector("#hour");

function getSecondsSinceStartOfDay() {
  return (
    new Date().getSeconds() +
    new Date().getMinutes() * 60 +
    new Date().getHours() * 3600
  );
}

setInterval(function () {
  var time = getSecondsSinceStartOfDay();
  console.log(time);
    var hours = parseInt(time / 3600);
    var minutes = parseInt(time % 3600 / 60);
    var seconds = parseInt (time % 60);

    console.log(hours + ":" + minutes + ":" + seconds);

    hoursDiv.style.transform = "rotate("+((hours / 12)* 360)+"deg)";
    minutesDiv.style.transform = "rotate("+((minutes / 60)* 360)+"deg)";
    secondsDiv.style.transform = "rotate("+((seconds / 60)* 360)+"deg)";
}, 1000);
