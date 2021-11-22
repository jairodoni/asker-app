import { Stack, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { ButtonComponent } from "../components/ButtonComponent";
import { Card } from "../components/Card";
import { OptionCard } from "../components/OptionCard";

import styles from "../styles/asks.module.css"

export function Asks() {
  return (
    <Card>
      <Box
        sx={{
          marginTop: "-20px",
          position: "relative",
          padding: 2,
          borderRadius: "24px 24px 0 0",
          background: "#000"
        }}
      >
        <Typography>
          Pergunta 1 de 10
        </Typography>
      </Box>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        spacing={2}
        p={4}
        sx={{
          marginTop: "-20px",
        }}
      >
        <Typography width="100%" >
          Quais os quatros países que têm a
          maior população carcerária do
          mundo?
        </Typography>

        <OptionCard />
        <OptionCard />
        <OptionCard />
        <OptionCard />
        <br />
        <ButtonComponent background="#E79800" path="/record">
          Confirmar
        </ButtonComponent>
      </Stack>
    </Card>
  );
}