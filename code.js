function checkDay(day1, day2) {
  var randomResponses = [
    "No, it's not :(",
    "Cha",
    "Ne",
    "Nein",
    "Nee",
    "Nej",
    "Ei",
    "Nem",
    "Ani",
    "Nu",
  ];
  var currentWeekday = new Date().getDay();
  document.getElementById(day1).style.backgroundColor = "red";
  if (currentWeekday == day1 || currentWeekday == day2) {
    document.getElementById("displayText").innerHTML = "HELL YES IT IS.";
    return;
  } else {
    document.getElementById("displayText").innerHTML =
      randomResponses[Math.floor(Math.random() * randomResponses.length)];
    return;
  }
}

function clearText() {
  document.getElementById("displayText").innerHTML = "";
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
//make search dynamic for random button + static gif for days
//re-style buttons (input type radio for more control)
//set max width to control image size

//function changeColor() {
//  document.getElementById(day1).style.backgroundColor = "red";
//}

//  let randomGifResult = await randomGif.json();
//  if (response.ok) {
//    document.getElementById("giphy").src =
//      randomGifResult.data.images.original.url;
//  } else {
//    alert("HTTP-Error: " + response.status + "somebody done fucked up.");
//  }
//}
//      "https://media.giphy.com/media/DffShiJ47fPqM/giphy.gif"; right day
//https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif wrong day
//https://media.giphy.com/media/2alKkyRFPKRSU/giphy.gif weekend
