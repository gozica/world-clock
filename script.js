setInterval(function () {
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
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}</div>
      </div>
`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
