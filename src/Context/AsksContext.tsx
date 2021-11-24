import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { Ask } from '../types/asks';


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
  const [asks, setAsks] = useState<Ask[]>(() => {
    const askList = localStorage.getItem('@askerapp:asks')
    if (askList) {
      return JSON.parse(askList);
    }

    return [];
  });

  async function getAsks(amount: number) {
    const { data } = await api.get(`?amount=${amount}`);
    localStorage.setItem('@askerapp:asks', data.results)
    setAsks(data.results);
    return;
  };

  return (
    <AsksContext.Provider value={{ asks, setAsks, getAsks }}>
      {children}
    </AsksContext.Provider>
  )
}