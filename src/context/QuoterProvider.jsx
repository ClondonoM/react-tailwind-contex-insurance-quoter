import { useState, createContext } from 'react';
import {
  getYearDifference,
  brandFactor,
  planFactor,
  moneyFormat,
} from '../helpers';

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
  const [data, setData] = useState({
    brand: '',
    year: '',
    plan: '',
  });
  const [error, setError] = useState('');
  const [result, setResult] = useState(0);
  const handleChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const quoteInsurance = () => {
    let result = 2000;
    const yearDifference = getYearDifference(data.year);
    result -= (yearDifference * 3 * result) / 100;
    result = brandFactor(data.brand) * result;
    result = moneyFormat(planFactor(data.plan) * result);
    setResult(result);
  };

  return (
    <QuoterContext.Provider
      value={{
        data,
        handleChangeData,
        error,
        setError,
        quoteInsurance,
        result,
      }}
    >
      {children}
    </QuoterContext.Provider>
  );
};

export { QuoterProvider };

export default QuoterContext;
