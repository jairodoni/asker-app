import { createContext, ReactNode, useState } from 'react';
import { api } from '../services/api';
import { Question, Historic } from '../types/questions';

type QuestionResponse = Omit<Question, "id">;

interface QuizContextData {
  questions: Question[];
  setQuestions: (question: Question[]) => void;
  getQuestions: (amount: number) => Promise<void>;
  historic: Historic;
  setHistoric: (historic: Historic) => void;
}

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizContext = createContext({} as QuizContextData);

export function QuizProvider({ children }: QuizProviderProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [historic, setHistoric] = useState<Historic>(() => {
    const storagedHistoric = localStorage.getItem('@quizapp:historic');

    if (storagedHistoric) {
      return JSON.parse(storagedHistoric);
    }

    return {};
  });

  async function getQuestions(amount: number) {
    const { data } = await api.get(`?amount=${amount}`);

    const questionListFormated = data.results.map((question: QuestionResponse, indice: number) => {
      return {
        id: indice,
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        question: question.question,
        correct_answer: question.correct_answer,
        answers: [...question.incorrect_answers, question.correct_answer],
      };
    });

    setQuestions(questionListFormated);
    return;
  }


  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
        getQuestions,
        historic,
        setHistoric
      }}>
      {children}
    </QuizContext.Provider>
  );
}
