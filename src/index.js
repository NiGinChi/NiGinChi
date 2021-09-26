var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
var date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date + " ⌚ " + time;

document.getElementById("displayDateTime").innerHTML =
  "📅 " + daylist[day] + ", " + dateTime;

let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};

let city = prompt("Enter a city");

city = city.trim().toLowerCase();

if (weather[city] !== undefined) {
  let temp = weather[city].temp;
  let humidity = weather[city].humidity;
  let tempC = Math.round(temp);
  let tempF = Math.round((temp * 9) / 5 + 32);

  alert(
    `It is currently ${tempC}°C (${tempF}°F) in ${city} with a humidity of ${humidity}%`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
  );
}
