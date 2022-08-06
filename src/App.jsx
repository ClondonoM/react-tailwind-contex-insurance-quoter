import { QouterProvider } from './context/QouterProvider';
import AppInsurance from './components/AppInsurance';

function App() {
  return (
    <QouterProvider>
      <AppInsurance />
    </QouterProvider>
  );
}

export default App;
