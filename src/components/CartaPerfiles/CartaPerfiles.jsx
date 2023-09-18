import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function CartaPerfiles( { perfil } ) {
  return (
    <Card sx={{  
                width: "30vh",
                heigth: "2rem",
                marginRight: '20px',
                marginLeft: '20px',
                marginBot: '60vh', 
                border: '3px solid #3C9990', 
                borderRadius:"20px",
                transition:'transform 0.3s ease-in-out',
                backgroundColor:'#A6ECE0'

              }}>
      <CardMedia
        sx={{ height: "10rem" }}
        image={perfil.avatar}
        src={!perfil ?  '' : perfil.avatar}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {perfil.nickname}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {perfil.oficio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver perfil</Button>
      </CardActions>
    </Card>
  );
}