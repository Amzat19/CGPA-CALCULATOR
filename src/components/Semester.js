import { InputGroup, Form } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/esm/CloseButton';
import { useContext } from 'react';
import { CalculatorContext } from '../calculatorContext/useCalculatorContext';

const Semester = () => {
  const { updateRows, deleteCourse, semester } = useContext(CalculatorContext);
  return semester.map((data, index) => {
    const { courseName, courseScore, courseUnits } = data;
    return (
      <tr key={index}>
        <td>
          <InputGroup>
            <Form.Control
              type="text"
              name="courseName"
              value={courseName}
              onChange={(e) => updateRows(index, e)}
            />
            <InputGroup.Text>
              <i className="fa fa-pencil" aria-hidden="false" />
            </InputGroup.Text>
          </InputGroup>
        </td>
        <td>
          <InputGroup>
            <Form.Control
              type="number"
              name="courseScore"
              value={courseScore}
              onChange={(e) => updateRows(index, e)}
            />
            <InputGroup.Text>
              <i className="fa fa-pencil" aria-hidden="false" />
            </InputGroup.Text>
          </InputGroup>
        </td>
        <td>
          <InputGroup>
            <Form.Control
              type="text"
              name="courseUnits"
              value={courseUnits}
              onChange={(e) => updateRows(index, e)}
            />
            <InputGroup.Text>
              <i className="fa fa-pencil" aria-hidden="false" />
            </InputGroup.Text>
          </InputGroup>
        </td>
        <td className="pt-3">
          <CloseButton onClick={() => deleteCourse(index)} />
        </td>
      </tr>
    );
  });
};

export default Semester;
