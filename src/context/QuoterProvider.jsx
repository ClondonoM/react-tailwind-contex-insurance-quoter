import { useState, createContext } from 'react';

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <QuoterContext.Provider value={{ modal, setModal }}>
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };

export default QuoterContext;
