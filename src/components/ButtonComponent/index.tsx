import { ReactNode } from 'react';
import { styled } from '@material-ui/system';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';

interface ButtonComponentProps {
  background: string;
  children: ReactNode;
  path: string;
}

export function ButtonComponent({ background, children, path }: ButtonComponentProps) {

  const navigate = useNavigate();

  function handleGoTo() {
    navigate(path)
  }

  return (
    <ButtonStyled
      variant="text"
      onClick={handleGoTo}
      sx={{
        background: background,
        "&:hover": {
          background: background,
          filter: "brightness(0.85)",
          boxShadow: 'none',
        }
      }}>
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled(Button)({
  height: "2.95rem",
  marginTop: "1.6rem",
  padding: '4px 12px',
  textTransform: 'none',
  borderRadius: 10,
  boxShadow: 'none',
  color: "#fff",

  fontSize: "1.25rem",
  fontWeight: 600,
});