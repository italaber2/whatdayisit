function checkDay(clickedDay) {
  var randomResponses = [
    "This is not the day you're looking for.",
    "404: Day Not Found",
  ];
  var daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "The Weekend",
  ];
  var daysOfTheWeekCopyText = [
    "The morning light reveals the day That always comes too soon, they say The weekend gone, the dreams depart And with it goes the joy of heart We rise to face the toil ahead And wish that we were still in bed Oh Monday, why must thou arrive With work and cares, that we must survive?",
    "Tuesday is the day when the workweek truly begins! The air is electric with excitement and the sound of keyboards clicking. Teams are aligned, and everyone is ready to tackle their objectives with gusto. It's time to maximize our velocity, and make the most of each sprint. Let's show what we're made of, and deliver on our commitments like champions! Onward and upward, team!",
    "Wednesday, originating from the Old English term 'Wodnesdæg', is derived from the god Woden, a prominent deity in the Germanic pantheon. This midweek day has been associated with Woden since ancient times and remains a significant day in modern cultures worldwide.",
    "Captain's log, Stardate 2023.4: Thursday marks the beginning of the end of another week in the galaxy. Our crew has worked tirelessly, carrying out vital missions and overcoming obstacles. We've navigated treacherous waters, but we're still on course. The end of the week is in sight, and we're poised to make it a successful one. Continuing our journey at maximum warp, ready to boldly go where no one has gone before.",
    "Friday, the day of greatness, the culmination of a week of greatness. The air is filled with the anticipation of greatness to come, as we ready ourselves for a weekend of greatness. From dawn to dusk, we strive for greatness, pushing ourselves to new heights of greatness. Friday, a day to bask in the glow of our own greatness and prepare for greatness yet to come. Greatness awaits!",
  ];
  var currentDay = new Date().getDay();
  if (currentDay == clickedDay && currentDay < 6) {
    document.getElementById("dayText").innerHTML =
      daysOfTheWeek[clickedDay - 1];
    document.getElementById("copyText").innerHTML =
      daysOfTheWeekCopyText[clickedDay - 1];
    document.getElementById("giphy").src = "assets/rightDay.webp";
    return;
  } else if (currentDay == clickedDay && currentDay >= 6) {
    document.getElementById("dayText").innerHTML =
      daysOfTheWeek[clickedDay - 1];
    document.getElementById("copyText").innerHTML =
      "The weekend, man, it's like a rug that ties the week together. Time to grab a White Russian, put on your bathrobe, and just let the days unfold. No rules, no responsibilities, just leisurely rolling with the punches. Whether you're bowling, hanging with friends, or just enjoying a good time, the weekend is all about embracing the laid-back life. So grab a drink, take it easy, and just go with the flow, man. The weekend, it's just what the doctor ordered.";
    document.getElementById("giphy").src = "assets/theWeekend.webp";
    return;
  } else {
    document.getElementById("dayText").innerHTML =
      daysOfTheWeek[clickedDay - 1];
    document.getElementById("copyText").innerHTML =
      randomResponses[Math.floor(Math.random() * randomResponses.length)];
    document.getElementById("giphy").src = "assets/wrongDay.webp";
    return;
  }
}

function tofu() {
  document.getElementById("giphy").src = "assets/tofu.webp";
}

function resetAll() {
  document.getElementById("dayText").innerHTML = "Der Neue Beetle";
  document.getElementById("copyText").innerHTML =
    "Model: Volkswagen Beetle (Type 1) | Year: 1960 | Body Style: Sedan | Engine: Flat-4 Air-Cooled | Horsepower: 36 @ 4,500 RPM | Torque: 72 Nm @ 2,600 RPM | Transmission: 4-Speed Manual";
  document.getElementById("giphy").src = "assets/beetle.png";
}

function generateGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=KPswvUugpOVuVvMVZoKOFR7P7931QBY8&q=tofu&limit=50&rating=pg"
  )
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);
      document.getElementById("giphy").src =
        resJson.data[Math.floor(Math.random() * 49)].images.original.url;
    });
}

function toggleVisibility(button) {
  let buttonList = document.querySelectorAll(".btn");
  if (
    document.getElementById(button).style.backgroundColor == "" ||
    document.getElementById(button).style.backgroundColor ==
      "rgb(244, 244, 244)"
  ) {
    buttonList.forEach(
      (el) => (el.style.backgroundColor = "rgb(244, 244, 244)")
    );
    buttonList.forEach((el) => (el.style.color = "rgb(1, 30, 80)"));
    buttonList.forEach((el) => (el.style.fontWeight = "normal"));
    document.getElementById(button).style.backgroundColor = "rgb(1, 30, 80)";
    document.getElementById(button).style.color = "white";
    document.getElementById(button).style.fontWeight = "bold";
  } else {
    console.log(button);
    console.log(document.getElementById(button).style);
  }
}

//set max width to control image size
