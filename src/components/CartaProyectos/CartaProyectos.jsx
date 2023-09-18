import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CartaProyectos( { proyecto } ) {
  return (
    <Card sx={{  
                width: "30vh",
                heigth: "10vh",
                marginRight: '20px',
                marginLeft: '20px',
                marginBot: '60vh',
                maxHeight:'52vh', 
                border: "3px solid #3C9990", 
                borderRadius:"20px",
                transition:'transform 0.3s ease-in-out',
                backgroundColor:'#A6ECE0'
              }}
          >
      <CardMedia
        sx={{ height: "10rem" }}
        image={proyecto.img}
        src={proyecto.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {proyecto.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {proyecto.autor}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver proyecto</Button>
      </CardActions>
    </Card>
  );
}