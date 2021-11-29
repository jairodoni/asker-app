import { Stack } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { ButtonComponent } from '../components/ButtonComponent';
import { QuestionWithAnswer } from '../components/QuestionWithAnswer';
import { RecordCard } from '../components/RecordCard';
import { useAsks } from '../Hooks/useAsks';

export function RecordSession() {
  const { record } = useAsks();

  return (
    <RecordCard right={record.corrects} wrong={record.wrongs}>
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
        {record.recordQuestions.map(question => {

          const statusAnswer = question.answer_user === question.correct_answer ? true : false;
          const questionId = Number(question.id)
          return (
            <QuestionWithAnswer
              key={questionId}
              indice={questionId + 1}
              statusAnswer={statusAnswer}
              path={`/record/question/${questionId + 1}`}
            />
          )
        })}
      </Stack>
      <Box paddingX={4} paddingBottom={2}>
        <ButtonComponent background="#E79800" path="/">
          Back to home
        </ButtonComponent>
      </Box>
    </RecordCard>
  );
}
