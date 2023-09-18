import {useState, useEffect} from 'react'
import { getProyectos } from '../../api/api';
import FilaProyectos from '../FilaProyectos/FilaProyectos'
import { Container } from '@mui/material';


const  ContenedorCartas = () => {
  const [proyectos, setProyectos] = useState ( [] );
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProyectos = async () => {
      const proyectos = await getProyectos();
      setProyectos(proyectos); 
      setLoading(false)
    };
    fetchProyectos();
  }, []);
  
  return (
    <Container sx={{display: 'flex',
    backgroundColor:'#6BBCA8',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    border: "1px solid #3F7D92", 
    borderRadius:"20px",
    maxWidth: '1200px',
    marginLeft:"20px",
    paddingLeft:'15vh',
    padding:'15px',
    margin:'10px'}}>
        {loading ? <h2>loading...</h2> : <FilaProyectos proyectos={proyectos} />}
    </Container>
  )
}

export default ContenedorCartas