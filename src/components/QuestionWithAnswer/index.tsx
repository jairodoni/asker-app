import { useNavigate } from 'react-router';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { FiCheck } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import styles from './styles.module.css';

interface QuestionWithAnswerProps {
  indice: number;
  statusAnswer: boolean;
  path: string;
}

export function QuestionWithAnswer({ path, indice, statusAnswer }: QuestionWithAnswerProps) {
  const navigate = useNavigate();

  function handleGoTo() {
    navigate(path);
  }

  return (
    <Box className={styles.option} onClick={handleGoTo}>
      <Typography
        sx={{
          fontSize: '0.95rem',
          fontWeight: 400,
        }}
      >
        Question {indice}
      </Typography>
      {statusAnswer
        ? <FiCheck size={24} color="#45d003" />
        : <IoClose size={28} color="#cc0000" />
      }
    </Box>
  );
}
