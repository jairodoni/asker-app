import * as yup from 'yup';
import { Stack, Typography } from "@material-ui/core";
import { ErrorMessage, Form, Formik } from "formik";
import { ButtonComponent } from "../components/ButtonComponent";
import { Card } from "../components/Card";
import { InputComponent } from "../components/Input";
import { useAsks } from "../Hooks/useAsks";

const validationSchema = yup.object().shape({
  amount: yup.number().required('Amount is required')
});

export function Home() {
  const { getAsks } = useAsks();

  function handleSubmit(values: any) {
    getAsks(values.amount);
  }

  return (
    <Card>
      <Stack p={4} >
        <Formik
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          initialValues={{
            amount: ''
          }}
        >
          <Form>
            <Typography
              sx={{
                marginBottom: 2,
              }}
            >

              How many questions do you want to see?
            </Typography>
            <InputComponent
              placeholder="ex: 10"
              type="number"
              name="amount"
            />

            <ErrorMessage component="span" name="amount" />
            <ButtonComponent background="#45D003" path="/start" type="submit">
              Continue
            </ButtonComponent>
          </Form>
        </Formik>
      </Stack>
    </Card >
  );
}