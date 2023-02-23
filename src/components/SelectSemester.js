import { useContext } from 'react';
import { CalculatorContext } from '../calculatorContext/useCalculatorContext';

const SelectSemester = () => {
  const { semesterIndex } = useContext(CalculatorContext);
  return semesterIndex.map((data, index) => {
    const { semesterName } = data;
    return (
      <option key={index} value={index}>
        {semesterName || `Semester ${index + 1}`}
      </option>
    );
  });
};

export default SelectSemester;
