import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CartaPerfiles from '../CartaPerfiles/CartaPerfiles'

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

const FilaPerfiles = ({ perfiles }) => {
  return (
    <StyledGrid container spacing={1} sx={{ paddingRight:'30px', paddingLeft:'65vh', minHeight: '18rem'}}>
      {perfiles.map((perfil, i) => (
        <Grid item key={i}>
          <CartaPerfiles perfil={{ ...perfil }} />
        </Grid>
      ))}
    </StyledGrid>
  );
};

export default FilaPerfiles;