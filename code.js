function checkDay(day1, day2) {
  var randomResponses = [
    "This is not the day you're looking for.",
    "404: Day Not Found",
  ];

  //https://stackoverflow.com/questions/8836265/using-a-variable-value-to-call-an-array-element

  var daysOfTheWeek = ["Mediocre Monday", "Taco Tuesday"];
  var currentDay = new Date().getDay();
  if (currentDay == day2) {
    document.getElementById("dayText").innerHTML = daysOfTheWeek[1];
    document.getElementById("copyText").innerHTML = "HELL YES IT IS.";
    document.getElementById("giphy").src = "assets/rightDay.webp";
    return;
  } else if (currentDay == day2) {
    document.getElementById("dayText").innerHTML = "The Weekend";
    document.getElementById("copyText").innerHTML =
      "The weekend, man, it's like a rug that ties the week together. Time to grab a White Russian, put on your bathrobe, and just let the days unfold. No rules, no responsibilities, just leisurely rolling with the punches. Whether you're bowling, hanging with friends, or just enjoying a good time, the weekend is all about embracing the laid-back life. So grab a drink, take it easy, and just go with the flow, man. The weekend, it's just what the doctor ordered.";
    document.getElementById("giphy").src = "assets/theWeekend.webp";
    return;
  } else {
    document.getElementById("copyText").innerHTML =
      randomResponses[Math.floor(Math.random() * randomResponses.length)];
    document.getElementById("giphy").src = "assets/wrongDay.webp";
    return;
  }
}

function resetAll() {
  document.getElementById("dayText").innerHTML = "Der Neue Beetle";
  document.getElementById("copyText").innerHTML =
    "Model: Volkswagen Beetle (Type 1) | Year: 1960 | Body Style: Sedan | Engine: Flat-4 Air-Cooled | Horsepower: 36 @ 4,500 RPM | Torque: 72 Nm @ 2,600 RPM | Transmission: 4-Speed Manual";
  document.getElementById("giphy").src = "assets/beetle.png";
}

function generateGif() {
  fetch(
    "https://api.giphy.com/v1/gifs/search?api_key=KPswvUugpOVuVvMVZoKOFR7P7931QBY8&q=burrito&limit=50&rating=g"
  )
    .then((res) => res.json())
    .then((resJson) => {
      console.log(resJson);
      document.getElementById("giphy").src =
        resJson.data[Math.floor(Math.random() * 49)].images.original.url;
    });
}

//rewrite generateGif function with async await
//re-style buttons (input type radio for more control)
//set max width to control image size
