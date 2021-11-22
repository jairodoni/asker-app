import { Stack } from "@material-ui/core";
import { QuestionWithAnswer } from "../components/QuestionWithAnswer";
import { RecordCard } from "../components/RecordCard";


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
          width: "100%",
          maxHeight: "350px",
          overflowY: "scroll",
        }}
      >
        <QuestionWithAnswer />
        <QuestionWithAnswer />
        <QuestionWithAnswer />
        <QuestionWithAnswer />
        <QuestionWithAnswer />
        <QuestionWithAnswer />
        <QuestionWithAnswer />
        <QuestionWithAnswer />
        <QuestionWithAnswer />
        <QuestionWithAnswer />
      </Stack>
    </RecordCard>
  );
}