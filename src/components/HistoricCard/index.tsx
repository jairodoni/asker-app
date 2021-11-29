import { useAsks } from '../../Hooks/useAsks';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { ButtonComponent } from '../ButtonComponent';
import { Card } from '../Card';

export function HistoricCard() {
  const { record } = useAsks();
  return (
    <Card>
      <Box
        display="flex"
        justifyContent="flex-start"
        flexDirection="column"
        p={4}
      >
        <Typography marginBottom={2} fontSize="1.1rem" fontWeight="medium">
          Historic:
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
        >
          <Typography marginBottom={3} fontSize="1.3rem" fontWeight="medium">
            {record.recordQuestions.length} Questions
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          marginBottom={1}
        >
          <Typography fontSize="1.2rem" fontWeight="medium">
            Rights: {record.corrects}
          </Typography>
          <Typography fontSize="1.2rem" fontWeight="medium">
            Wrongs: {record.wrongs}
          </Typography>
        </Box>
        <ButtonComponent path="/record" background="#E79800" >
          See questions
        </ButtonComponent>
      </Box>
    </Card>
  );
}