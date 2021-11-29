import { Stack } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { useParams } from 'react-router';
import { AnswerCard } from '../components/AnswerCard';
import { ButtonComponent } from '../components/ButtonComponent';
import { RecordCard } from '../components/RecordCard';
import { useAsks } from '../Hooks/useAsks';

export function Answer() {
  const { record } = useAsks();
  const { askId } = useParams()
  const question = record.recordQuestions[Number(askId) - 1]
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
        <ButtonComponent background="#E79800" path="/record">
          Back
        </ButtonComponent>
      </Box>
    </RecordCard>
  );
}
