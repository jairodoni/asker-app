import { Stack, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { ButtonComponent } from "../components/ButtonComponent";
import { Card } from "../components/Card";
import { QuestionWithAnswer } from "../components/QuestionWithAnswer";

import styles from "../styles/recordSession.module.css";

export function RecordSession() {
  return (
    <Card>
      <Box className={styles.score}>
        <div className={`${styles.score} ${styles.right}`}>
          <Typography fontWeight={500}>
            Acertou: 5
          </Typography>
        </div>
        <div className={`${styles.score} ${styles.wrong}`}>
          <Typography fontWeight={500}>
            Errou: 5
          </Typography>
        </div>
      </Box>

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