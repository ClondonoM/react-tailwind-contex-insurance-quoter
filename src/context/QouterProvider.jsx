import { createContext } from 'react';

const QouterContext = createContext();

const QouterProvider = ({ children }) => {
  const hello = 'hello world';

  return (
    <QouterContext.Provider value={{ hello }}>
      {children}
    </QouterContext.Provider>
  );
};

export { QouterProvider };

export default QouterContext;
