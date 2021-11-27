import { Stack } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { useEffect } from 'react';
import { ButtonComponent } from '../components/ButtonComponent';
import { QuestionWithAnswer } from '../components/QuestionWithAnswer';
import { RecordCard } from '../components/RecordCard';

export function RecordSession() {

  return (
    <RecordCard right={5} wrong={5}>
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
        <QuestionWithAnswer path="/answer" />
        <QuestionWithAnswer path="/" />
        <QuestionWithAnswer path="/" />
        <QuestionWithAnswer path="/" />
        <QuestionWithAnswer path="/" />
        <QuestionWithAnswer path="/" />
        <QuestionWithAnswer path="/" />
        <QuestionWithAnswer path="/" />
        <QuestionWithAnswer path="/" />
        <QuestionWithAnswer path="/" />
      </Stack>
      <Box paddingX={4} paddingBottom={2}>
        <ButtonComponent background="#E79800" path="/">
          Back to home
        </ButtonComponent>
      </Box>
    </RecordCard>
  );
}
