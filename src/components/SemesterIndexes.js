import {
  Badge,
  Button,
  CloseButton,
  Container,
  FormControl,
  InputGroup,
} from 'react-bootstrap';
import { useContext } from 'react';
import { CalculatorContext } from '../calculatorContext/useCalculatorContext';

const SemesterIndexes = () => {
  const {
    toggleSemesterModal,
    allSemestersArray,
    changeActiveSemester,
    updateSemesterName,
    deleteSemester,
    semesterGpa,
  } = useContext(CalculatorContext);

  return allSemestersArray.map((data, index) => {
    const { semesterName } = data;
    const semester = allSemestersArray[index];
    const numberOfunits = semester.map((course) =>
      parseInt(course.courseUnits)
    );
    const totalUnits = numberOfunits.reduce((a, b) => a + b, 0);
    const gpa = semesterGpa(semester);

    return (
      <Container className="mb-4" key={index}>
        <InputGroup>
          <InputGroup.Text id="semesterName">
            <i className="fa fa-pencil" aria-hidden="false" />
          </InputGroup.Text>
          <FormControl
            type="text"
            name="semesterName"
            value={semesterName}
            onChange={(e) => updateSemesterName(index, e)}
            aria-describedby="semesterName"
            placeholder={`Semester ${index + 1}`}
          />
        </InputGroup>
        <div className="d-flex flex-wrap gap-2">
          <div className="mt-4 d-flex gap-2">
            <Button variant="dark" size="sm" className="rounded-pill">
              Courses
              <Badge bg="info" className="ml-2">
                {allSemestersArray[index].length}
              </Badge>
            </Button>
            <Button variant="dark" size="sm" className="rounded-pill">
              TNU
              <Badge bg="primary" className="ml-2">
                {Number.isNaN(totalUnits) ? 0 : totalUnits}
              </Badge>
            </Button>
            <Button variant="dark" size="sm" className="rounded-pill">
              GPA
              <Badge bg="success" className="ml-2">
                {Number.isNaN(gpa) ? (0.0).toFixed(2) : gpa}
              </Badge>
            </Button>
          </div>
          <div className="mt-4 d-flex gap-2">
            <Button
              value={index}
              onClick={(e) => {
                changeActiveSemester(e);
                toggleSemesterModal();
              }}
              className="fw-semibold"
            >
              Edit Courses
            </Button>
            <CloseButton
              className="align-self-center"
              onClick={() => deleteSemester(index)}
              disabled={index === 0}
            />
          </div>
        </div>
      </Container>
    );
  });
};

export default SemesterIndexes;
