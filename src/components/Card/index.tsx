import { ReactNode } from 'react';
import { Paper } from '@material-ui/core';
import { Box } from '@material-ui/system';

interface CardProps {
  children: ReactNode;
}

export function Card({ children }: CardProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      p="10px"
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: "380px",
          width: "100%",
          borderRadius: "24px",
          marginBottom: 2,
          boxShadow: "0 6px 16px rgba(0,0,0,0.7)"
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}