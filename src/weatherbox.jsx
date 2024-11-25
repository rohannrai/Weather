import { useState } from "react";
import Infobox from "./infobox";
import Searchbox from "./searchbox";

export default function Weatherbox(){
    let [weatherinfo,setweatherinfo] = useState({
        City: "Delhi" ,
        Description : "smoke" ,
        Humidity : 72 , 
       Max_Temperature: 17.05 , 
       Min_Temperature: 17.05 , 
        Temperature: 17.05 ,
        Feels_Like : 16.05
    });
    let updateInfo = (result) =>{
        setweatherinfo(result);
    }

    return(<>
        <Searchbox updateinfo={updateInfo}/>
        <Infobox weather={weatherinfo}/> 
        </>
    )
}