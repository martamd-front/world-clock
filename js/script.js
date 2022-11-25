function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDate = losAngelesElement.querySelector(".date");
    let losAngelesTime = losAngelesElement.querySelector(".time");
    losAngelesDate.innerHTML = `${moment()
      .tz("America/Los_Angeles")
      .format("MMMM Do, YYYY")}`;
    losAngelesTime.innerHTML = `${moment()
      .tz("America/Los_Angeles")
      .format("h:mm:ss [<small>]A[</small>]")}`;
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDate = parisElement.querySelector(".date");
    let parisTime = parisElement.querySelector(".time");
    parisDate.innerHTML = `${moment()
      .tz("Europe/Paris")
      .format("MMMM Do, YYYY")}`;
    parisTime.innerHTML = `${moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]A[</small>]")}`;
  }
}

updateTime();
setInterval(updateTime, 1);

function updateCity(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityDate = moment().tz(cityTimeZone).format("MMMM Do, YYYY");
    let cityTime = moment()
      .tz(cityTimeZone)
      .format("h:mm:ss [<small>]A[</small>]");
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<ul class="cities" id="cities">
          <li>
            <div>
              <h2>${cityName}</h2>
              <p class="date">${cityDate}</p>
            </div>
            <div class="time">${cityTime}</div>
          </li>
        </ul>`;
  }
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
