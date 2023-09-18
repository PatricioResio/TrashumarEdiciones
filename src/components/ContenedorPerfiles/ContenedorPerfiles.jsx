import {useState, useEffect} from 'react'
import { getPerfiles } from '../../api/api';
import FilaPerfiles from '../FilaPerfiles/FilaPerfiles'
import { Container } from '@mui/material';


const  ContenedorPerfiles = () => {
  const [perfiles, setPerfiles] = useState ( [] );
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchPerfiles = async () => {
      const perfiles = await getPerfiles();
      setPerfiles(perfiles); 
      setLoading(false)
    };
    fetchPerfiles();
  }, []);
  
  return (
    <Container sx={{display: 'flex',
    backgroundColor:'#6BBCA8',
    flexDirection: 'column',
    justifyContent: 'center',
    border: "1px solid #3F7D92", 
    borderRadius:"20px",
    alignItems: 'center',
    width: '100%',
    padding:'15px',
    paddingLeft:'5vh',
    maxWidth: '1200px',
    margin: '10px'}}>
        {loading ? <h2>loading...</h2> : <FilaPerfiles perfiles={perfiles} />}
    </Container>
  )
}

export default ContenedorPerfiles;