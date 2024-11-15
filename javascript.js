// alert('hello')

function updatedCity(event) {
  if (event.target.value.length > 0) {
    let cityTimeZone = event.target.value;
    console.log(cityTimeZone);
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
      console.log(cityTimeZone);
    }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    citiesElement.innerHTML = `<div class="city">
        <div>
          <h2 class="city-name">${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          <div class="back-btn">
          <a href="/">Go Back</a>
          </div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
      "A"
    )}</small>
</div>
    
      `;
  }
}

let selectedCityElement = document.querySelector("#citySelected");

selectedCityElement.addEventListener("change", updatedCity);

function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do, YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do, YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

setInterval(updateTime, 1);
