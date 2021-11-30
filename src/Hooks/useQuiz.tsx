import { useContext } from 'react';
import { QuizContext } from '../Context/QuizContext';

export const useQuiz = () => {
  return useContext(QuizContext);
};
