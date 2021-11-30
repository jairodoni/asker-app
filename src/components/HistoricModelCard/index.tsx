import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { ReactNode } from 'react';
import { Card } from '../Card';
import styles from './styles.module.css';

interface HistoricCardProps {
  right: number;
  wrong: number;
  children: ReactNode;
}

export function HistoricModelCard({ children, right, wrong }: HistoricCardProps) {
  return (
    <Card>
      <Box className={styles.score}>
        <div className={`${styles.score} ${styles.right}`}>
          <Typography fontWeight={500}>Right: {right}</Typography>
        </div>
        <div className={`${styles.score} ${styles.wrong}`}>
          <Typography fontWeight={500}>Wrong: {wrong}</Typography>
        </div>
      </Box>
      {children}
    </Card>
  );
}
