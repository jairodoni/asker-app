import { ReactNode } from 'react';
import { styled } from '@material-ui/system';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';

interface ButtonComponentProps {
  background: string;
  path?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
}

const ButtonStyled = styled(Button)({
  height: '2.95rem',
  width: '100%',
  marginTop: '1.6rem',
  padding: '4px 12px',

  textTransform: 'none',
  borderRadius: 10,
  color: '#fff',
  boxShadow: 'none',

  fontSize: '1.25rem',
  fontWeight: 600,
});

export function ButtonComponent({
  background,
  children,
  path,
  type = 'button',
}: ButtonComponentProps) {
  const navigate = useNavigate();

  function handleGoTo() {
    if (path) {
      navigate(path);
    }
    return;
  }

  return (
    <ButtonStyled
      type={type}
      onClick={type !== 'submit' ? handleGoTo : () => { }}
      sx={{
        background: background,
        '&:hover': {
          background: background,
          filter: 'brightness(0.85)',
          boxShadow: 'none',
        },
      }}
    >
      {children}
    </ButtonStyled>
  );
}
