// JSON Payload for Weather Data

var weatherData = {
  "cities": [
    {
      "name": "Poulsbo, WA",
      "temperature": 75,
      "chance_of_rain": 5
    },
    {
      "name": "Silverdale, WA",
      "temperature": 78,
      "chance_of_rain": 4
    },
    {
      "name": "Bremerton, WA",
      "temperature": 77,
      "chance_of_rain": 4
    },
    {
      "name": "Port Orchard, WA",
      "temperature": 77,
      "chance_of_rain": 4
    },
    {
      "name": "Busan, South Korea",
      "temperature": 60,
      "chance_of_rain": 14
    },
    {
      "name": "Charlotte, NC",
      "temperature": 71,
      "chance_of_rain": 6
    }
  ]
};

// Function to display the weather data in the table
function displayWeatherData() {
  var tableBody = $("#weatherTableBody");

  // Clears Existing Table Rows
  tableBody.html("");

  // Loop through each city in the weather data and create a table row
  weatherData.cities.forEach(function(city) {
    var row = $("<tr>");

    var cityNameCell = $("<td>").text(city.name);
    row.append(cityNameCell);

    var temperatureCell = $("<td>").text(city.temperature);
    row.append(temperatureCell);

    var chanceOfRainCell = $("<td>").text(city.chance_of_rain);
    row.append(chanceOfRainCell);

    tableBody.append(row);
  });

  //Apply fade-in effect to table
tableBody.hide().fadeIn(2000); //milliseconds
}

// Changes color of table rows on hover
$("tbody tr").hover(
  function() {
    $(this).css("background-color", "orange");
  },
  function(){
    $(this).css("background-color", "");
  }
);

// Call the function to display the weather data on page load
$(document).ready(function() {
  displayWeatherData();
});