setInterval(function(){
  //detroit time
  let detroitElement = document.querySelector("#detroit");
  let detroitDateElement = detroitElement.querySelector(".date");
  let detroitTimeElement = detroitElement.querySelector(".time");
  let detroitTime = moment().tz("America/Detroit");

  detroitDateElement.innerHTML = detroitTime.format("MMMM Do YYYY");
  detroitTimeElement.innerHTML = detroitTimeElement.innerHTML =
    detroitTime.format("H:m:ss");

  //tokyo time
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTimeElement.innerHTML =
    tokyoTime.format("H:m:ss");
}, 1000)


