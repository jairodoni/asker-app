import { Stack } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { ButtonComponent } from '../components/ButtonComponent';
import { QuestionWithAnswer } from '../components/QuestionWithAnswer';
import { HistoricModelCard } from '../components/HistoricModelCard';
import { useQuiz } from '../Hooks/useQuiz';

export function HistoricSession() {
  const { historic } = useQuiz();

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
        {historic.historicQuestions.map(question => {

          const statusAnswer = question.answer_user === question.correct_answer ? true : false;
          const questionId = Number(question.id)

          return (
            <QuestionWithAnswer
              key={questionId}
              indice={questionId + 1}
              statusAnswer={statusAnswer}
              path={`/historic/question/${questionId + 1}`}
            />
          )
        })}

      </Stack>
      <Box paddingX={4} paddingBottom={2}>
        <ButtonComponent background="#E79800" path="/">
          Back to home
        </ButtonComponent>
      </Box>
    </HistoricModelCard>
  );
}
