import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CartaProyectos from '../CartaProyectos/CartaProyectos'

const StyledGrid = styled(Grid)({
  display: 'flex',
  marginLeft: '20px',
  paddingLeft: '20px',
  flexDirection: 'row',
  justifyContent: 'center',
  flexWrap:'nowrap',
  alignItems: 'center',
  scrollBehavior: 'smooth',
  overflowX: 'scroll',
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#333',
    borderRadius: '15px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#d4d4d4',
    border: 'none',
    borderRadius: '15px',
  },
});

const FilaProyectos = ({ proyectos }) => {
  return (
    <StyledGrid container spacing={1} sx={{ paddingRight:'30px', paddingLeft:'80vh',  minHeight: '18rem'}}>
      {proyectos.map((proyecto) => (
        <Grid sx={{}} item key={proyecto.fecha}>
          <CartaProyectos proyecto={{ ...proyecto }} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default FilaProyectos;