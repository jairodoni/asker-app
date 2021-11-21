import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

interface InputProps {
  placeholder: string;
  type: string;
}

export function Input({ placeholder, type }: InputProps) {
  return (
    <InputStyled placeholder={placeholder} type={type} />
  );
}

const InputStyled = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    height: "1.8rem",
    borderRadius: 10,
    background: "#333",
    border: "none",
    fontSize: "1.1rem",
    width: '100%',
    padding: '10px 12px',
  },
}));