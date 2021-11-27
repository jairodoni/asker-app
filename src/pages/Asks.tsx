import { Stack, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ButtonComponent } from '../components/ButtonComponent';
import { Card } from '../components/Card';
import { OptionCard } from '../components/OptionCard';
import { useAsks } from '../Hooks/useAsks';
import { Ask } from '../types/asks';
interface Alternative {
  alternative: string;
}

export function Asks(): JSX.Element {
  const { asks } = useAsks();
  const { askId } = useParams();
  const [currentAsk, setCurrentAsk] = useState<Ask>({} as Ask);
  const [recordQuestions, setRecordQuestions] = useState<Ask[]>([]);
  const [selectedAlternative, setSelectedAlternative] = useState('');
  const [submitExecuted, setSubmitExecuted] = useState(false);
  const [correctAnswersUser, setCorrectAnswersUser] = useState(0);
  const [wrongAnswersUser, setWrongAnswersUser] = useState(0);
  const [orderAlternative, setOrderAlternative] = useState<Array<string>>([]);

  const navigate = useNavigate();

  async function handleSubmit(data: Alternative) {
    if (data.alternative.trim() === '') {
      return;
    }

    setSubmitExecuted(true);

    if (data.alternative === currentAsk.correct_answer) {
      setCorrectAnswersUser(correctAnswersUser + 1);
    } else {
      setWrongAnswersUser(wrongAnswersUser + 1);
    }

    setRecordQuestions([...recordQuestions, { ...currentAsk, answer_user: selectedAlternative }]);

    const formatRecordAnswers = {
      corrects: correctAnswersUser,
      wrongs: wrongAnswersUser,
      recordQuestions,
    };

    const pageParam = Number(askId);

    if (pageParam === asks.length) {
      await localStorage.setItem(
        '@askerapp:record',
        JSON.stringify(formatRecordAnswers)
      );
      await new Promise((r) => setTimeout(r, 2000));
      setSubmitExecuted(false);
      navigate(`/record`);
    }
    await new Promise((r) => setTimeout(r, 2000));
    setSubmitExecuted(false);
    navigate(`/asks/${pageParam + 1}`);
  }

  async function shuffleArray() {
    let array = asks[Number(askId) - 1].answers;

    for (let i = array?.length - 1; i > 0; i--) {

      const j = await Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    setOrderAlternative(array)
  }

  useEffect(() => {
    if (asks) {
      setCurrentAsk(asks[Number(askId) - 1]);
      shuffleArray()
    } else if (asks == []) {
      navigate('/');
    }
  }, [navigate]);


  return (
    asks && currentAsk ? (

      <Card>
        <Formik
          onSubmit={handleSubmit}
          initialValues={{
            alternative: '',
          }}
        >
          <Form>
            <Box
              sx={{
                marginTop: '-20px',
                position: 'relative',
                padding: 2,
                borderRadius: '24px 24px 0 0',
                background: '#000',
              }}
            >
              <Typography>
                Question {Number(askId)} out of {asks.length}
              </Typography>
            </Box>
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="flex-start"
              spacing={2}
              p={4}
              sx={{
                marginTop: '-20px',
                wordWrap: 'break-word',
              }}
              id="my-radio-group"
            >
              <Typography width="100%">{currentAsk.question}</Typography>
              {orderAlternative.map((alternative) => {
                return (
                  <OptionCard
                    key={alternative}
                    id={alternative}
                    submition={submitExecuted}
                    correctAnswer={currentAsk.correct_answer}
                    content={alternative}
                    selectedAlternative={selectedAlternative}
                    setSelectedAlternative={setSelectedAlternative}
                  />
                );
              })}
              <br />
              <ButtonComponent
                background="#E79800"
                path="/record"
                type="submit"
              >
                Confirm
              </ButtonComponent>
            </Stack>
          </Form>
        </Formik>

      </Card>
    ) : (
      <Card>
        <Stack p={4}>
          <ButtonComponent background="#E79800" path="/">
            Voltar para home
          </ButtonComponent>
        </Stack>
      </Card>
    )
  );
}
