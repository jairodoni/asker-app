import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { CircularProgress, Stack, Typography } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Form, Formik } from 'formik';
import { ButtonComponent } from '../components/ButtonComponent';
import { Card } from '../components/Card';
import { OptionCard } from '../components/OptionCard';
import { useQuiz } from '../Hooks/useQuiz';
import { motion } from "framer-motion";
import { HistoricQuestions, Question } from '../types/questions';

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

export function Questions() {
  const { questions, setHistoric } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState<Question>({ ...questions[0] });
  const [historicQuestions, setHistoricQuestions] = useState<HistoricQuestions[]>([]);
  const [selectedAlternative, setSelectedAlternative] = useState<string>('');
  const [submitExecuted, setSubmitExecuted] = useState<boolean>(false);
  const [correctAnswersUser, setCorrectAnswersUser] = useState<number>(0);
  const [wrongAnswersUser, setWrongAnswersUser] = useState<number>(0);
  const [orderAlternative, setOrderAlternative] = useState<Array<string>>([]);
  const [activeFade, setActiveFade] = useState<boolean>(true);

  const navigate = useNavigate();

  async function handleSubmit(data: Alternative) {
    if (submitExecuted) {
      return;
    }
    if (data.alternative === '' || selectedAlternative === '') {
      return;
    }

    setSubmitExecuted(true);

    const corrects = data.alternative === currentQuestion.correct_answer ? correctAnswersUser + 1 : correctAnswersUser;
    const wrongs = data.alternative !== currentQuestion.correct_answer ? wrongAnswersUser + 1 : wrongAnswersUser;

    setCorrectAnswersUser(corrects);
    setWrongAnswersUser(wrongs);

    const rercordQuestions = [
      ...historicQuestions,
      {
        ...currentQuestion,
        answer_user: selectedAlternative
      }
    ];

    setHistoricQuestions(rercordQuestions)

    const formatHistoricAnswers = {
      corrects: corrects,
      wrongs: wrongs,
      historicQuestions: rercordQuestions,
    };

    await new Promise((r) => setTimeout(r, 3000));
    setActiveFade(false);
    setSubmitExecuted(false);
    await new Promise((r) => setTimeout(r, 500));

    const questionId = Number(currentQuestion.id) + 1;

    if (questionId < questions.length) {
      setCurrentQuestion(questions[questionId]);
      setSelectedAlternative('')
      setActiveFade(true);
      return;
    }

    setHistoric(formatHistoricAnswers);
    await localStorage.setItem('@quizapp:historic', JSON.stringify(formatHistoricAnswers));
    navigate('/historic');
  }

  async function shuffleArray() {
    let array = questions[Number(currentQuestion.id)].answers;

    for (let i = array.length - 1; i > 0; i--) {
      const j = await Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setOrderAlternative(array);
  }

  useEffect(() => {
    if (questions.length === 0) {
      navigate('/');
    }
    if (currentQuestion) {
      shuffleArray();
    }
  }, [currentQuestion]);

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
              marginTop='-20px'
              borderRadius='24px 24px 0 0'
              padding={2}
              sx={{ background: '#000' }}
            >
              <Typography>
                Question {Number(currentQuestion.id) + 1} out of {questions.length}
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
            >

              <Box
                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
              />

              {orderAlternative.map((alternative) => {
                return (

                  <OptionCard
                    key={alternative}
                    id={alternative}
                    submition={submitExecuted}
                    correctAnswer={currentQuestion.correct_answer}
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
