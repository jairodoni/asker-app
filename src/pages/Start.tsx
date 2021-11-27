import { Stack } from '@material-ui/core';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { ButtonComponent } from '../components/ButtonComponent';
import { Card } from '../components/Card';

export function Start() {
  return (
    <Card>
      <Stack
        p={4}
        marginTop="-20px"
        direction="row"
        justifyContent="center"
        alignItems="baseline"
        spacing={2}
      >
        <ButtonComponent background="#45D003" path="/asks/1">
          Start
        </ButtonComponent>
        <ButtonComponent background="#CC0000" path="/">
          Cancel
        </ButtonComponent>
      </Stack>
    </Card>
  );
}
