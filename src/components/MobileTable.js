import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { useContext } from 'react';
import { CalculatorContext } from '../calculatorContext/useCalculatorContext';

const MobileTable = () => {
  const { semester, updateRows, deleteCourse } = useContext(CalculatorContext);
  return semester.map((data, index) => {
    const { courseName, courseScore, courseUnits } = data;
    return (
      <Table key={index} className="mobile-table border rounded mt-4">
        <tr>
          <th className="pt-4 border-bottom-0">Course</th>
          <td className="border-bottom-0">
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
        </tr>
        <tr>
          <th className="pt-4 border-bottom-0">Scores</th>
          <td className="border-bottom-0">
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
        </tr>
        <tr>
          <th className="pt-4 border-bottom-0">Units</th>
          <td className="border-bottom-0">
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
        </tr>
        <tr>
          {/* <th>Delete</th> */}
          <td className="border-bottom-0">
            <Button
              className="h-50 bg-primary"
              size="sm"
              onClick={() => deleteCourse(index)}
            >
              Delete
            </Button>
          </td>
        </tr>
      </Table>
    );
  });
};

export default MobileTable;
