import * as yup from 'yup';
import { Stack, Typography } from '@material-ui/core';
import { ErrorMessage, Form, Formik } from 'formik';
import { ButtonComponent } from '../components/ButtonComponent';
import { Card } from '../components/Card';
import { InputComponent } from '../components/Input';
import { useAsks } from '../Hooks/useAsks';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const validationSchema = yup.object().shape({
  amount: yup.number().required('Amount is required').min(1),
});

export function Home() {
  const { getAsks, setAsks } = useAsks();

  const navigate = useNavigate();

  function handleSubmit(data: any) {
    getAsks(data.amount);
    navigate('/start');
  }

  useEffect(() => {
    setAsks([]);
    localStorage.removeItem('@askerapp:asks');
  }, []);

  return (
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
            <Typography
              sx={{
                marginBottom: 2,
              }}
            >
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
  );
}
