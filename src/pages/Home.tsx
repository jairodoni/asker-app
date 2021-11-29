import * as yup from 'yup';
import { Stack, Typography } from '@material-ui/core';
import { ErrorMessage, Form, Formik } from 'formik';
import { ButtonComponent } from '../components/ButtonComponent';
import { Card } from '../components/Card';
import { InputComponent } from '../components/Input';
import { useAsks } from '../Hooks/useAsks';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { HistoricCard } from '../components/HistoricCard';

const validationSchema = yup.object().shape({
  amount: yup.number().required('Amount is required').min(1),
});

export function Home() {
  const { record, getAsks, setAsks } = useAsks();

  const navigate = useNavigate();

  async function handleSubmit(data: any) {
    getAsks(data.amount);
    navigate('/start');
  }

  useEffect(() => {
    setAsks([]);
  }, []);

  return (
    <>
      <Card>
        <Stack p={4}>
          <Formik
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            initialValues={{
              amount: '',
            }}
          >
            <Form>
              <Typography marginBottom={2} fontSize="1.1rem" fontWeight="medium">
                How many questions do you want to see?
              </Typography>
              <InputComponent placeholder="ex: 10" type="number" name="amount" />

              <ErrorMessage component="span" name="amount" />
              <ButtonComponent background="#45D003" type="submit">
                Continue
              </ButtonComponent>
            </Form>
          </Formik>
        </Stack>
      </Card>
      {!!record && (
        <HistoricCard />
      )}
    </>
  );
}
