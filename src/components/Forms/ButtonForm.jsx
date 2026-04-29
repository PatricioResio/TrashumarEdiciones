import { Button } from "@mui/material";

const ButtonForm = ({ text, type = "button", onClick, disabled }) => {
    return (
        <Button
            type={type}
            onClick={onClick}
            disabled={disabled}
            sx={{
                bgcolor: 'primary.main',
                color: 'white',
                fontWeight: 600,
                margin: "auto",
                px: 4,
                py: 1.8,
                fontSize: '1rem',
                alignSelf: 'flex-start',
                borderRadius: 2,
                '&:hover': {
                    bgcolor: 'primary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 20px rgba(23, 184, 184, 0.35)',
                },
                transition: 'all 0.3s ease',
            }}
        >
            {text}
        </Button>
    );
};

export default ButtonForm;