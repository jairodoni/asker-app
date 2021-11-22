import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { ReactNode } from "react";
import { ButtonComponent } from "../ButtonComponent";
import { Card } from "../Card";
import styles from './styles.module.css';


interface RecordCardProps {
  right: number;
  wrong: number;
  children: ReactNode;
}

export function RecordCard({ children, right, wrong }: RecordCardProps) {
  return (
    <Card>
      <Box className={styles.score}>
        <div className={`${styles.score} ${styles.right}`}>
          <Typography fontWeight={500}>
            Right: {right}
          </Typography>
        </div>
        <div className={`${styles.score} ${styles.wrong}`}>
          <Typography fontWeight={500}>
            Wrong: {wrong}
          </Typography>
        </div>
      </Box>

      {children}

      <Box
        paddingX={4}
        paddingBottom={2}
      >
        <ButtonComponent background="#E79800" path="/">
          Back to home
        </ButtonComponent>
      </Box>
    </Card>
  );
}

