import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import "./infobox.css"


export default function Infobox ({weather}){
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
      );
     
      const card = (
        <React.Fragment>
          <CardContent>
            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
             Weather Today 
            </Typography>
            <Typography> City:  {weather.City} </Typography>
          <Typography>Temperature:  {weather.Temperature}&deg;</Typography>
          <Typography> Maximum Today :  {weather.Max_Temperature}&deg; </Typography>
          <Typography> Humidity :  {weather.Humidity}</Typography>
          <Typography> The weather is described as {weather.Description} and feels like {weather.Feels_Like}&deg; </Typography>
          </CardContent>
          <CardActions>
            
          </CardActions>
        </React.Fragment>
      );
    return(
        <div className='infobox'> 
      <Box  sx={{ minWidth: 275 }} style={{width:"400px"}}>
      <Card variant="outlined" className='card' >{card}</Card>
    </Box>
  
        </div>
    )
}