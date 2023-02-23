import './index.css';
import { useEffect, useContext } from 'react';
import Header from './components/Header';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import { CalculatorContext } from './calculatorContext/useCalculatorContext';

function App() {
  const { setSemester, activeSemesterIndex, allSemestersArray } =
    useContext(CalculatorContext);

  useEffect(() => {
    setSemester(allSemestersArray[activeSemesterIndex]);
    // eslint-disable-next-line
  },[activeSemesterIndex, allSemestersArray]);

  return (
    <>
      <Header />
      <Calculator />
      <Footer />
    </>
  );
}

export default App;
