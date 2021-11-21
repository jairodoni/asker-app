import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';

import styles from './styles.module.css';

export function OptionCard() {
  return (
    <Box className={styles.container}>
      <Typography
        sx={{
          fontSize: "0.95rem",
          fontWeight: 400,
        }}
      >
        Brasil, Estados Unidos, México e Índia
      </Typography>
    </Box>
  );
}