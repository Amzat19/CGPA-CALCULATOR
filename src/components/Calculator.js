import {
  Card,
  Container,
  Button,
  ButtonGroup,
  InputGroup,
  Form,
  Table,
  OverlayTrigger,
} from 'react-bootstrap';
import { useContext } from 'react';
import SelectSemester from './SelectSemester';
import SemestersModal from './SemestersModal';
import { GPAModal } from './GPAModal';
import Semester from './Semester';
import { CalculatorContext } from '../calculatorContext/useCalculatorContext';
import { CGPAModal } from './CGPAModal';
import MobileTable from './MobileTable';
import { popover } from './GpaScalePopover';

const Calculator = () => {
  const {
    addNewCourses,
    toggleSemesterModal,
    activeSemesterIndex,
    changeActiveSemester,
    changeScale,
    toggleGPAModal,
    toggleCGPAModal,
    preferredScale,
  } = useContext(CalculatorContext);

  return (
    <>
      <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
        <Button className="fw-semibold mb-5 ml-2">View Grade Scales</Button>
      </OverlayTrigger>
      <Container>
        <h5 className="text-center text-white">CGPA CALCULATOR</h5>
        <p className="text-center text-white mb-0 w-50 mx-auto">
          Easily calculate your CGPA and keep track of your academic progress
        </p>
      </Container>
      <Card className="calc-card m-auto">
        <Card.Header className="fw-bolder">Compute your CGPA</Card.Header>
        <Card.Body>
          <div className="d-flex flex-wrap justify-content-between">
            <div>
              <p className="fw-semibold">Edit, Change or Add a New Semester</p>
              <InputGroup>
                <Form.Select
                  aria-label="semesters"
                  value={activeSemesterIndex}
                  onChange={changeActiveSemester}
                >
                  <option>Select dropdown</option>
                  <SelectSemester />
                </Form.Select>
                <Button onClick={toggleSemesterModal}>
                  <i className="fa fa-pencil-square-o" aria-hidden="true" />
                </Button>
              </InputGroup>
              <SemestersModal />
            </div>
            <div>
              <p className="fw-semibold mb-0 mt-4">Choose your scale</p>
              <ButtonGroup size="sm">
                <Button
                  type="button"
                  name="4"
                  onClick={(e) => changeScale(e)}
                  className={`fw-semibold h-50 ${
                    preferredScale === 4 ? 'bg-info' : ''
                  }`}
                >
                  4.0
                </Button>
                <Button
                  type="button"
                  name="5"
                  onClick={(e) => changeScale(e)}
                  className={`fw-semibold h-50 ${
                    preferredScale === 5 ? 'bg-info' : ''
                  }`}
                >
                  5.0
                </Button>
                <Button
                  type="button"
                  name="7"
                  onClick={(e) => changeScale(e)}
                  className={`fw-semibold h-50 ${
                    preferredScale === 7 ? 'bg-info' : ''
                  }`}
                >
                  7.0
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <Card.Title className="d-flex justify-content-center mt-5">
            Input your scores
          </Card.Title>
          <Table className="desktop-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Scores</th>
                <th>Units</th>
                <th>X</th>
              </tr>
            </thead>
            <tbody>
              <Semester />
            </tbody>
          </Table>
          <MobileTable />
        </Card.Body>
        <Card.Footer className="d-flex flex-wrap gap-3 justify-content-between mt-4">
          <Button onClick={addNewCourses} className="fw-semibold">
            Add Course
          </Button>
          <Button onClick={() => toggleGPAModal()} className="fw-semibold">
            View GPA
          </Button>
          <GPAModal />
          <Button onClick={() => toggleCGPAModal()} className="fw-semibold">
            View CGPA
          </Button>
          <CGPAModal />
        </Card.Footer>
      </Card>
    </>
  );
};

export default Calculator;
