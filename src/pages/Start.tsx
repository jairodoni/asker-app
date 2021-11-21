import { Stack } from "@material-ui/core";
import { ButtonComponent } from "../components/ButtonComponent";
import { Card } from "../components/Card";

export function Start() {
  return (
    <Card>
      <Stack
        marginTop="-14px"
        direction="row"
        justifyContent="center"
        alignItems="baseline"
        spacing={2}
      >
        <ButtonComponent background="#45D003" path="/asks">
          Start
        </ButtonComponent>
        <ButtonComponent background="#CC0000" path="/">
          Cancel
        </ButtonComponent>
      </Stack>
    </Card >
  );
}
