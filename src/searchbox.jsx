import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./searchbox.css"
import { useState } from 'react';
import Apikeys from './Apikeys';


export default function Searchbox({updateinfo}){
    let [city,setcity] = useState("");
    const API = " https://api.openweathermap.org/data/2.5/weather?"
    const API_key = Apikeys
    let getweatherInfo = async () =>{
      let response =  await fetch(
       `${API}q=${city}&appid=${API_key}&units=metric`
      )
      let jsonResponse = await  response.json();
      let result=  {
             City  : jsonResponse.name,
             Humidity : jsonResponse.main.humidity,
             Temperature : jsonResponse.main.temp,
             Max_Temperature : jsonResponse.main.temp_max ,
             Min_Temperature : jsonResponse.main.temp_min,
             Description: jsonResponse.weather[0].description,
             Feels_Like : jsonResponse.main.feels_like,
      }
      
      return result


    }
 

    let handleChange = (event) =>{
        setcity(event.target.value)
    }
    let handleSubmit = async (event) =>{
        event.preventDefault();
        console.log(city);
       let info = await  getweatherInfo();
        updateinfo(info);
        setcity("");
    }

    return(
      <>
        <div className="searchbox"> 
        <form onSubmit={handleSubmit}>
              <TextField id="outlined-basic"  className="search" label="Search city" variant="outlined"  value={city} 
              onChange={handleChange} required/>
              <br /><br />
              <Button variant="contained" type='submit' > Search </Button>
              
        </form>
        </div>
        </>
    )
}