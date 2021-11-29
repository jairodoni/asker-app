import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CircularProgress, Stack, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Form, Formik } from 'formik';
import { ButtonComponent } from '../components/ButtonComponent';
import { Card } from '../components/Card';
import { OptionCard } from '../components/OptionCard';
import { useAsks } from '../Hooks/useAsks';
import { Ask } from '../types/asks';
import { motion } from "framer-motion";
interface Alternative {
  alternative: string;
}

const container = {
  hidden: { opacity: 0, scale: 1 },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      ease: "easeIn"
    }
  },
  closed: { opacity: 0, x: "100%" },
};



export function Asks() {
  const { asks, setRecord } = useAsks();
  const [currentAsk, setCurrentAsk] = useState<Ask>({ ...asks[0] });
  const [recordQuestions, setRecordQuestions] = useState<Ask[]>([]);
  const [selectedAlternative, setSelectedAlternative] = useState('');
  const [submitExecuted, setSubmitExecuted] = useState(false);
  const [correctAnswersUser, setCorrectAnswersUser] = useState(0);
  const [wrongAnswersUser, setWrongAnswersUser] = useState(0);
  const [orderAlternative, setOrderAlternative] = useState<Array<string>>([]);
  const [activeFade, setActiveFade] = useState(true);


  const navigate = useNavigate();

  async function handleSubmit(data: Alternative) {
    if (submitExecuted) {
      return;
    }
    if (data.alternative.trim() === '') {
      return;
    }

    setSubmitExecuted(true);

    const corrects = data.alternative === currentAsk.correct_answer ? correctAnswersUser + 1 : correctAnswersUser;
    const wrongs = data.alternative !== currentAsk.correct_answer ? wrongAnswersUser + 1 : wrongAnswersUser;

    setCorrectAnswersUser(corrects);
    setWrongAnswersUser(wrongs);

    const rercordQuestions = [
      ...recordQuestions,
      {
        ...currentAsk,
        answer_user: selectedAlternative
      }
    ];

    setRecordQuestions(rercordQuestions)

    const formatRecordAnswers = {
      corrects: corrects,
      wrongs: wrongs,
      recordQuestions: rercordQuestions,
    };

    await new Promise((r) => setTimeout(r, 3000));
    setActiveFade(false);
    await new Promise((r) => setTimeout(r, 500));
    setSubmitExecuted(false);

    const questionId = Number(currentAsk.id) + 1;

    if (questionId < asks.length) {
      setCurrentAsk(asks[questionId]);
      setActiveFade(true);
      return;
    }

    setRecord(formatRecordAnswers);
    await localStorage.setItem('@askerapp:record', JSON.stringify(formatRecordAnswers));
    navigate('/record');
  }

  async function shuffleArray() {
    let array = asks[Number(currentAsk.id)].answers;

    for (let i = array.length - 1; i > 0; i--) {
      const j = await Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setOrderAlternative(array);
  }

  useEffect(() => {
    if (asks.length === 0) {
      navigate('/');
    }
    if (currentAsk) {
      shuffleArray();
    }
  }, [currentAsk]);

  const component123 = (
    <div>
      <h1>Testando Transição</h1>
    </div>
  )

  return (
    <motion.div
      variants={container}
      animate={activeFade ? 'visible' : 'hidden'}
    >
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
                Question {Number(currentAsk.id) + 1} out of {asks.length}
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

              {!submitExecuted ? (
                <ButtonComponent
                  background="#E79800"
                  type="submit"
                >
                  Confirm
                </ButtonComponent>
              ) : (
                <ButtonComponent background="#E79800" >
                  <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                    <CircularProgress color="inherit" size={20} />
                  </div>
                </ButtonComponent>
              )}
            </Stack>
          </Form>
        </Formik>
      </Card>
    </motion.div>
  );
}
