import { Stack, Typography } from "@material-ui/core";
import { ButtonComponent } from "../components/ButtonComponent";
import { Card } from "../components/Card";
import { Input } from "../components/Input";

export function Home() {

  return (
    <Card>
      <Stack>
        <Typography
          sx={{
            marginBottom: 2,
          }}
        >
          Quantas perguntas você quer ver?
        </Typography>
        <Input placeholder="ex: 10" type="number" />
        <ButtonComponent background="#45D003" name="Continuar" path="/start" />
      </Stack>
    </Card>
  );
}
