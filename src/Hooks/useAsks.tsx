import { useContext } from 'react';
import { AsksContext } from '../Context/AsksContext';

export const useAsks = () => {
  return useContext(AsksContext);
}