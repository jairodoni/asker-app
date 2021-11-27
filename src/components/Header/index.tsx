import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';

export function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        height: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 600 }}>
        Asker App
      </Typography>
    </Box>
  );
}
