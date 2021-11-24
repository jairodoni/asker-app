import { Stack, Typography } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { ButtonComponent } from "../components/ButtonComponent";
import { Card } from "../components/Card";
import { OptionCard } from "../components/OptionCard";

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
          Question 1 out of 10
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
          Which four countries have the
          largest prison population in the
          world?
        </Typography>

        <OptionCard />
        <OptionCard />
        <OptionCard />
        <OptionCard />
        <br />
        <ButtonComponent background="#E79800" path="/record">
          Confirm
        </ButtonComponent>
      </Stack>
    </Card>
  );
}