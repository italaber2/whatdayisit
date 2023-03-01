import { randomResponses, randomGif, daysOfTheWeek } from "./data.js";

export function checkDay(clickedDay) {
  var daysOfTheWeekCopyText = ["Yes, it's exactly the day you want it to be."];
  var currentDay = new Date().getDay();
  if (currentDay == clickedDay && currentDay < 6 && currentDay != 0) {
    document.getElementById("dayText").innerHTML =
      daysOfTheWeek[clickedDay - 1];
    document.getElementById("copyText").innerHTML = daysOfTheWeekCopyText[0];
    document.getElementById("giphy").src = "assets/rightDay.webp";
    return;
  } else if (
    (clickedDay == 6 && currentDay == 6) ||
    (clickedDay == 6 && currentDay == 0)
  ) {
    document.getElementById("dayText").innerHTML =
      daysOfTheWeek[clickedDay - 1];
    document.getElementById("copyText").innerHTML = daysOfTheWeekCopyText[0];
    document.getElementById("giphy").src = "assets/theWeekend.webp";
    return;
  } else if (clickedDay == 7) {
    document.getElementById("dayText").innerHTML =
      daysOfTheWeek[clickedDay - 1];
    document.getElementById("copyText").innerHTML =
      "'Guess what, I have flaws. What are they? Oh, I don't know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I'll hit somebody with my car. So sue me.' – Michael Scott";
    return;
  } else {
    document.getElementById("dayText").innerHTML =
      daysOfTheWeek[clickedDay - 1];
    let randomNumber = Math.floor(Math.random() * randomResponses.length);
    document.getElementById("copyText").innerHTML =
      randomResponses[randomNumber];
    document.getElementById("giphy").src = randomGif[randomNumber];
    return;
  }
}

function tofu() {
  document.getElementById("giphy").src = "assets/tofu.webp";
  document.getElementById("dayText").innerHTML = "Tofu";
  document.getElementById("copyText").innerHTML = "Greatness!";
}

function resetAll() {
  document.getElementById("dayText").innerHTML = "Der Neue Beetle";
  document.getElementById("copyText").innerHTML =
    "Model: Volkswagen Beetle (Type 1) | Year: 1960 | Body Style: Sedan | Engine: Flat-4 Air-Cooled | Horsepower: 36 @ 4,500 RPM | Torque: 72 Nm @ 2,600 RPM | Transmission: 4-Speed Manual";
  document.getElementById("giphy").src = "assets/beetle.png";
}

function generateGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=KPswvUugpOVuVvMVZoKOFR7P7931QBY8&q=the%20office&limit=50"
  )
    .then((res) => res.json())
    .then((resJson) => {
      document.getElementById("giphy").src =
        resJson.data[Math.floor(Math.random() * 49)].images.original.url;
    });
}

function toggleVisibility(button) {
  let buttonList = document.querySelectorAll(".btn");
  if (
    document.getElementById(button).style.backgroundColor == "" ||
    (document.getElementById(button).style.backgroundColor ==
      "rgb(244, 244, 244)" &&
      button != 8)
  ) {
    buttonList.forEach(
      (el) => (el.style.backgroundColor = "rgb(244, 244, 244)")
    );
    buttonList.forEach((el) => (el.style.color = "rgb(1, 30, 80)"));
    buttonList.forEach((el) => (el.style.fontWeight = "normal"));
    document.getElementById(button).style.backgroundColor = "rgb(1, 30, 80)";
    document.getElementById(button).style.color = "white";
    document.getElementById(button).style.fontWeight = "bold";
  } else if (button == 8) {
    document.getElementById(button).style.backgroundColor =
      "rgb(244, 244, 244)";
    document.getElementById(button).style.color = "rgb(1, 30, 80)";
    document.getElementById(button).style.fontWeight = "normal";
    buttonList.forEach((el) => (el.style.color = "rgb(1, 30, 80)"));
    buttonList.forEach((el) => (el.style.fontWeight = "normal"));
    buttonList.forEach(
      (el) => (el.style.backgroundColor = "rgb(244, 244, 244)")
    );
  }
}

window.checkDay = checkDay;
window.tofu = tofu;
window.toggleVisibility = toggleVisibility;
window.generateGif = generateGif;
window.resetAll = resetAll;
