import { Button } from "@mui/material"

const ButtonNavForm = ({position, text, posicionForm, setPosicionForm}) =>{
    return (
        <Button
        variant="outlined"
        sx={{
          borderRadius: "5px",
          fontSize:{xs:"0.7rem",md:"1rem",lg:"1.2rem"},
          height:{xs:"4rem",sm:"3rem", md:"3rem",lg:"4rem"},

          width: "25%",
          p: "0.1rem",
          backgroundColor: posicionForm === position ? "Ñ" : "#00000",
          color: posicionForm === position ? "#000000ea" : "#000",
          fontWeight: posicionForm === position ? "bold" : "normal",
          "&:hover": {
            backgroundColor:
              posicionForm === position ? "#7AE7F5" : "primary.main",
          },
        }}
        onClick={() => setPosicionForm(position)}
      >
        {text}
      </Button>
    )
}
export default ButtonNavForm;