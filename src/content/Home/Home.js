import React, { useEffect, useState } from "react";
import Axios from "axios";
import './Home.css'
const Home = () => {
    const [temperatureData, setTemperatureData] = useState({});
    useEffect(() => {
        Axios.get("http://localhost:3000").then((response) => {
      console.log("response", response);
      setTemperatureData(response.data[0])
    });
    },[])

    const dateBuilder = (d) => {
        console.log("d",d);
        let dateFormat = new Date(d)
        console.log("date",dateFormat);
        let months = ["January","Febraury","March","April","may","June","July","August","September","October","November","December"]
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        let day = days[dateFormat.getDay()]
        let date = dateFormat.getDate()
        let month = months[dateFormat.getMonth()]
        let year = dateFormat.getFullYear()
        let hour = dateFormat.getHours();
        let minute = dateFormat.getMinutes();
        let ampm = hour >= 12 ? 'pm' : 'am';
        hour = hour % 12;
  hour = hour ? hour : 12;
  minute = minute.toString().padStart(2, '0');
  let strTime = hour + ':' + minute + ' ' + ampm;

        return `${day} ${date} ${month} ${year} at ${strTime}`
    }

    return(
        <>
            <div className="location-box">
            <div className="location">Halifax, NS</div>
            <div className="date">{dateBuilder(temperatureData.time)}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    {temperatureData.temperatue}°C
                </div>
            </div>
        </>
        
        
    )
}

export default Home