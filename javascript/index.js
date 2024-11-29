function updateTime() {
  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Sydney

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

let htmlString = [];

function updateCity(event) {
  let city = event.target.value;

  if (city === "currentCity") {
    city = moment.tz.guess();
  }

  let cityDate = moment().tz(city).format("MMMM Do YYYY");
  let cityTime = moment().tz(city).format("h:mm:ss [<small>]A[</small>]");

  let citiesElement = document.querySelector("#cities");

  htmlString.unshift(`
    <div class="city">
     <div>
    <h2>${city.replace("_", " ").split("/")[1]}</h2>
    <div class="date">${cityDate}</div>
     </div>
    <div class="time">${cityTime}</div>
    </div>`);

  if (htmlString.length < 2) {
    citiesElement.innerHTML =
      htmlString[0] + `<a href="index.html">Back to home page</a>`;
  } else {
    citiesElement.innerHTML =
      htmlString[0] +
      htmlString[1] +
      `<a href="index.html">Back to home page</a>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
