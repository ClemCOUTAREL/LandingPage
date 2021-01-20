const time = document.querySelector("h1");
const date = document.querySelector("h3");

const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const titles = [h1, h2, h3, h4];

const light = document.querySelector("#light-icon");
const settings = document.querySelector("#settings-btn")
let background = document.querySelector("#background-image")

let theme = "light";

function getTime() {
  //Time parameters
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  //Formate the time display to get a two number format for seconds, minutes and hours
  function formatTime(hour, minute, second) {
    if (hour < 10) {
      hours = "0" + today.getHours();
    } else if (minute < 10) {
      minutes = "0" + today.getMinutes();
    } else if (second < 10) {
      seconds = "0" + today.getSeconds();
    }
  }

  formatTime(hours, minutes, seconds);

  time.textContent = `${hours}:${minutes}:${seconds}`;

  //Date parameters
  let days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  let date = today.getDate();
  let day = days[today.getDay()];
  let month = today.getMonth();

  date.textContent = `${day} + ' ' +  ${date} +  ' ' + ${month}`;

  //Update the time every second
  setTimeout(getTime, 1000);
}

light.addEventListener("click", () => {
  if (theme === "light") {
    for (let i = 0; i < titles.length; i++) {
      titles[i].classList.remove("light-text");
      titles[i].classList.add("dark-text");
      light.src = "./svg/dark.svg"
      theme = "dark";
    }
  } else {
    for (let j = 0; j < titles.length; j++) {
      titles[j].classList.remove("dark-text");
      titles[j].classList.add("light-text");
      light.src = "./svg/sun.svg";
      theme = "light";
    }
  }
});


getTime();
