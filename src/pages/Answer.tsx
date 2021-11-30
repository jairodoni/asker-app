import { Stack, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { useParams } from 'react-router';
import { AnswerCard } from '../components/AnswerCard';
import { ButtonComponent } from '../components/ButtonComponent';
import { HistoricModelCard } from '../components/HistoricModelCard';
import { useQuiz } from '../Hooks/useQuiz';

export function Answer() {
  const { historic } = useQuiz();
  const { questionId } = useParams()

  const question = historic.historicQuestions[Number(questionId) - 1]

  return (
    <HistoricModelCard right={historic.corrects} wrong={historic.wrongs}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        spacing={2}
        p={4}
        sx={{
          width: '100%',
          maxHeight: '350px',
          overflowY: 'scroll',
        }}
      >
        <Typography width="100%">
          {question.question}
        </Typography>

        {question.answers.map((alternative) => {
          return (
            <AnswerCard
              key={alternative}
              id={alternative}
              correctAnswer={question.correct_answer}
              content={alternative}
              answerUser={question.answer_user}
            />
          );
        })}
      </Stack>
      <Box paddingX={4} paddingBottom={2}>
        <ButtonComponent background="#E79800" path="/historic">
          Back
        </ButtonComponent>
      </Box>
    </HistoricModelCard>
  );
}
