import { createContext } from 'react';
import { useState } from 'react';
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [name, setName] = useState('react');

  return <DataContext.Provider value={name}>{children}</DataContext.Provider>;
};
