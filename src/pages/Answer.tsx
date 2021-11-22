import { Stack } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { ButtonComponent } from '../components/ButtonComponent';
import { OptionCard } from '../components/OptionCard';
import { RecordCard } from '../components/RecordCard';

export function Answer() {
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
        <OptionCard />
        <OptionCard />
        <OptionCard />
        <OptionCard />
      </Stack>
      <Box
        paddingX={4}
        paddingBottom={2}
      >
        <ButtonComponent background="#E79800" path="/record">
          Back
        </ButtonComponent>
      </Box>
    </RecordCard>
  );
}