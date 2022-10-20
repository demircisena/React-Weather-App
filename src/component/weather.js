
import'./style.css'
function Weather({weather,city,data}){
    if(!weather){return <p>Yükleniyor...</p>}
    
    //  const timetoday=(time)=>{
    //     const date= new Date(time*1000);
    //     const newDay= new Intl.DateTimeFormat("en-US",{weekday : "long"}).format(date);
    //     return newDay;
    //  }
    //     const result=weather.data.map((item)=>{
    //         return{
    //             day:timetoday(item.list.dt),
    //         }
    //     })

    return(
    <div>
           

       <div className='weathercity'>
            <h1>{weather.city.name} </h1>   
            <div className="icon cloudy">
  <div className="cloud"></div>
  <div class="cloud"></div>
</div>

                         <div className='tempforblock'>
                         <div className='description'>
             <h1 className='temp'>{weather.list[0].main.temp}°C</h1>
             <h1 className='des-h1'>{weather.list[0].weather[0].description} </h1>
             
             </div>
            
            <div className='max-min'>
            <h1>max {weather.list[0].main.temp_max}°C </h1>
            <h1>min {weather.list[0].main.temp_min}°C</h1>
            <h1>humidity {weather.list[0].main.humidity}</h1>
            
            </div>
                        </div>
            
            
            
            {/* <div className="weather-container">
            {result.map((item, idx) => (
              <p> key={idx} item={item} </p>
            ))}
           </div> */}

            </div>
    </div>
    )
}
export default Weather;



