import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infoBox.css"

export default function WeatherInfo({info}){

    return(
        <div className='InfoBox'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://media.istockphoto.com/id/95008347/photo/sky-clearing-up.jpg?s=1024x1024&w=is&k=20&c=mlp8NgRLwrTyLv3sokpn7WvizKzMy2R35Spe-T8rtSU="
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <p>Temperature: {info.temp}&deg;C </p>
                        <p>humidity: {info.humidity} </p>
                        <p>tempMin: {info.tempMin}&deg;C </p>
                        <p>tempMin: {info.tempMin}&deg;C </p>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like: {info.tempMin}&deg;C </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}