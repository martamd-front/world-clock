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

  let romeElement = document.querySelector("#rome");
  if (romeElement) {
    let romeDate = romeElement.querySelector(".date");
    let romeTime = romeElement.querySelector(".time");
    romeDate.innerHTML = `${moment()
      .tz("Europe/Rome")
      .format("MMMM Do, YYYY")}`;
    romeTime.innerHTML = `${moment()
      .tz("Europe/Rome")
      .format("h:mm:ss [<small>]A[</small>]")}`;
  }

  let aucklandElement = document.querySelector("#auckland");
  if (aucklandElement) {
    let aucklandDate = auckland.querySelector(".date");
    let aucklandTime = aucklandElement.querySelector(".time");
    aucklandDate.innerHTML = `${moment()
      .tz("Pacific/Auckland")
      .format("MMMM Do, YYYY")}`;
    aucklandTime.innerHTML = `${moment()
      .tz("Pacific/Auckland")
      .format("h:mm:ss [<small>]A[</small>]")}`;
  }
}

updateTime();
setInterval(updateTime, 1);

function updateCity(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityDate = moment().tz(cityTimeZone).format("MMMM Do, YYYY");
    let cityTime = moment()
      .tz(cityTimeZone)
      .format("h:mm:ss [<small>]A[</small>]");
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<ul class="cities" id="cities">
          <li>
            <div class="city_content">
              <h2>${cityName}</h2>
              <p class="date">${cityDate}</p>
             
            </div>
            <div class="time">${cityTime}</div>
          </li>
        </ul>
         <a class="back-link" href="/">< Back to all cities</a>`;
  }
}
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
