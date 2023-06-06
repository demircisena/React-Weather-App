import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { setApiKey } from "../store/apiKeySlice";

function Weather() {
  //  const key = "9fb6000f298324eae13be0d8e9ae6b95";
  const apiKey = useSelector((state) => state.apiKey);
  const dispatch = useDispatch();
  useEffect(() => {
    const storedApiKey = localStorage.getItem("apiKey");
    if (storedApiKey) {
      dispatch(setApiKey(storedApiKey));
    }
  }, []);

  const lang = navigator.language.split("-")[0];

  const [weather, setWeather] = useState();
  const [city, setCity] = useState("İstanbul");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getWeatherData = async (apiKey) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=${lang}`
      );
      setWeather(response.data);
      setError(false);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (apiKey && city) {
      getWeatherData(apiKey);
    }
  }, [apiKey, city]);

  const handleRefresh = () => {
    getWeatherData(apiKey);
  };

  const getWeatherIcon = (main) => {
    if (main.includes("Clouds")) {
      return (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      );
    } else if (main.includes("Sun")) {
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
    } else if (main.includes("Rain")) {
      return (
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </div>
      );
    } else if (main.includes("Thunderstorm")) {
      return (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      );
    } else if (main.includes("Snow")) {
      return (
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      );
    }
  };

  if (loading) {
    return <p>Yükleniyor...</p>;
  }

  if (error && city == "İstanbul") {
    return (
      <div style={{ marginTop: "20px", padding: "20px" }}>
        <p style={{ marginBottom: "10px", fontSize: "16px" }}>
          Yanlış veya eksik APİKEY girdiniz. Lütfen APİKEY kontrol ediniz.
        </p>
        <button
          style={{ fontSize: "16px", padding: "8px 16px", borderRadius: 10 }}
          onClick={handleRefresh}
        >
          Yenile
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="citystep">
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Lütfen Bir Şehir Adı Giriniz"
        ></input>
      </div>

      <div className="weathercity">
        <h1>{weather.city.name}</h1>
        {getWeatherIcon(weather.list[0].weather[0].main)}

        <div className="tempforblock">
          <div className="description">
            <h1 className="temp">{weather.list[0].main.temp}°C</h1>
            <h1 className="des-h1">{weather.list[0].weather[0].description}</h1>
          </div>

          <div className="max-min">
            <h1>max {weather.list[0].main.temp_max}°C</h1>
            <h1>min {weather.list[0].main.temp_min}°C</h1>
            <h1>humidity {weather.list[0].main.humidity}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
