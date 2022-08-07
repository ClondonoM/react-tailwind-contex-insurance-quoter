import Form from './Form';
import useQuoter from '../hooks/useQuoter';
import Spinner from './Spinner';

const AppInsurance = () => {
  const { result, loading } = useQuoter();
  console.log(result);
  return (
    <>
      <header className='my-10'>
        <h1 className='text-white text-center text-4xl font-black'>
          Car Insurance Quoter
        </h1>
      </header>
      <main className='bg-white md:w-2/3 lg:w2/4 mx-auto shadow rounded-lg p-10'>
        <Form />
        {loading ? <Spinner /> : <p>{result}</p>}
      </main>
    </>
  );
};

export default AppInsurance;
