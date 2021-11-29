import { createContext, ReactNode, useState } from 'react';
import { api } from '../services/api';
import { Ask, Record } from '../types/asks';

interface AsksContextData {
  asks: Ask[];
  setAsks: (asks: Ask[]) => void;
  getAsks: (amount: number) => Promise<void>;
  record: Record;
  setRecord: (record: Record) => void;
}

interface AsksProviderProps {
  children: ReactNode;
}

export const AsksContext = createContext({} as AsksContextData);

export function AsksProvider({ children }: AsksProviderProps): JSX.Element {
  const [asks, setAsks] = useState<Ask[]>([]);
  const [record, setRecord] = useState<Record>(() => {
    const storagedRecord = localStorage.getItem('@askerapp:record');

    if (storagedRecord) {
      return JSON.parse(storagedRecord);
    }

    return [];
  });

  async function getAsks(amount: number) {
    const { data } = await api.get(`?amount=${amount}`);

    const askListFormated = data.results.map((ask: Ask, indice: number) => {
      return {
        id: indice,
        category: ask.category,
        type: ask.type,
        difficulty: ask.difficulty,
        question: ask.question,
        correct_answer: ask.correct_answer,
        answers: [...ask.incorrect_answers, ask.correct_answer],
      };
    });

    setAsks(askListFormated);
    return;
  }


  return (
    <AsksContext.Provider
      value={{
        asks,
        setAsks,
        getAsks,
        record,
        setRecord
      }}>
      {children}
    </AsksContext.Provider>
  );
}
