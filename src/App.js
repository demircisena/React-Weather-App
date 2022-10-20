import axios from "axios";
// import './App.css';
import { useEffect, useState } from 'react';
import City from "./component/city";
import Weather from "./component/weather";
import Icons from "./component/icons";


function App() {
  // const key=process.env.REACT_APP_WEATHER_API_KEY
  const key="9fb6000f298324eae13be0d8e9ae6b95"
  const lang= navigator.language.split("-")[0];

  const [weather,setWeather]=useState();
  const [city,setCity]=useState("İstanbul");
  // console.log(process.env.REACT_APP_WEATHER_API_KEY)
  const GetWeatherData= async ()=>{
    try{
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=${lang}`)
      console.log(response.data)
      setWeather(response.data);
      console.log(city);
      
     
      
      
    ;
    }catch{
      console.log("veri alırken hata oluştu.")
    }
   
  } 
  useEffect(()=>{ 
    GetWeatherData();
   
    
 },[city])
//  useEffect(()=>{
//   Weather();
//  },[weather])


//  useEffect(()=>{
//   Weather()
//  },[city])

 
  return (
    <div className="App">
     
     <City setCity={setCity} city={city}/>
    <Weather weather={weather}/>
    <Icons/>
    </div>
  );
}

export default App;
