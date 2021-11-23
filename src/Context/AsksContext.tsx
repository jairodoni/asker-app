import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Ask {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: [
    "Jumpman",
    "Mr. Video",
    "Mario"
  ]
}

interface AsksContextData {
  asks: Ask[];
  setAsks: (asks: Ask[]) => void;
  getAsks: (amount: number) => Promise<void>;
}

interface AsksProviderProps {
  children: ReactNode;
}

export const AsksContext = createContext({} as AsksContextData);

export function AsksProvider({ children }: AsksProviderProps) {
  const [asks, setAsks] = useState<Ask[]>([]);

  async function getAsks(amount: number) {
    const { data } = await api.get(`?amount=${amount}`);
    setAsks(data.results);
  };

  return (
    <AsksContext.Provider value={{ asks, setAsks, getAsks }}>
      {children}
    </AsksContext.Provider>
  )
}