import { useNavigate } from "react-router";
import { Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { FiCheck } from "react-icons/fi";
import styles from './styles.module.css';

interface QuestionWithAnswerProps {
  path: string;
}

export function QuestionWithAnswer({ path }: QuestionWithAnswerProps) {

  const navigate = useNavigate();

  function handleGoTo() {
    navigate(path)
  }

  return (
    <Box className={styles.option} onClick={handleGoTo}>
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