import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import './SearchBox.css';

const SearchBox = ({updateInfo}) => {
    
    const [city, setCity] = useState("");
    const [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "268e289f76d66a6971343bccab279805";


    const getWeatherInfo = async() => {
        try {
          let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }

        console.log(result);
        return result ;
        }

        catch(err) {
          throw err;
        }
    }


  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
    console.log(city)
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
    }

    catch(err) {
      setError(true);
    }

  }

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleChange}
          required
        />
        <br /><br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists</p>}
      </form>
    </div>
  );
};

export default SearchBox;
