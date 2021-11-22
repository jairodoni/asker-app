import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { FiCheck } from "react-icons/fi";
import styles from './styles.module.css';

export function QuestionWithAnswer() {

  return (
    <Box className={styles.option}>
      <Typography
        sx={{
          fontSize: "0.95rem",
          fontWeight: 400,
        }}
      >
        Question 01
      </Typography>
      <FiCheck size={24} color="#45d003" />
    </Box>
  );
}