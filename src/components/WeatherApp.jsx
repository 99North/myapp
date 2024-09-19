import React, { useState, useEffect } from "react";
import "./WeatherApp.css";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState(null);
  const [showMessageDialog, setShowMessageDialog] = useState(false);
  const [message, setMessage] = useState("");

  const currentDate = new Date();
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  const API_KEY = "bcda10ba323e88e96cb486015a104d1d";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      if (data.cod === "404") {
        setMessage("City not found. Please try again.");
        setShowMessageDialog(true);
      } else {
        setWeatherData(data);
        setMessage(""); // Clear any previous messages
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setMessage("Error fetching data. Please try again later.");
      setShowMessageDialog(true);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim() === "") {
      setMessage("Please enter a city name.");
      setShowMessageDialog(true);
    } else {
      fetchWeatherData();
    }
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png";
      case "Rain":
        return "/rain_with_cloud.png";
      case "Mist":
        return "/Tornado.png";
      case "Haze":
        return "/sun.png";
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {showMessageDialog && (
        <div className="message-dialog">
          <p>{message}</p>
          <button onClick={() => setShowMessageDialog(false)}>Close</button>
        </div>
      )}
      <div className="container">
        {weatherData && weatherData.weather && (
          <>
            <h1 className="container_date">{formattedDate}</h1>
            <div className="weather_data">
              <h2 className="container_city">{weatherData.name}</h2>
              <img
                className="container_img"
                src={getWeatherIconUrl(weatherData.weather[0].main)}
                width="180px"
                alt="Weather Icon"
              />
              <h2 className="container_degree">{weatherData.main.temp} °C</h2>
              <h2 className="country_per">{weatherData.weather[0].main}</h2>

              <form className="form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="input"
                  placeholder="Enter city name"
                  value={city}
                  onChange={handleInputChange}
                  required
                />
                <button type="submit">Search</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
