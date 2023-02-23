import { Modal, Button } from 'react-bootstrap';
import { useContext } from 'react';

import SemesterIndexes from './SemesterIndexes';
import { CalculatorContext } from '../calculatorContext/useCalculatorContext';

const SemestersModal = () => {
  const {
    showSemesterModal,
    toggleSemesterModal,
    addNewSemester,
    addNewSemesterIndex,
  } = useContext(CalculatorContext);

  return (
    <Modal show={showSemesterModal} onHide={toggleSemesterModal}>
      <Modal.Header closeButton>
        <Modal.Title>Course details for all semesters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="fw-semibold">All Semesters</p>
        <SemesterIndexes />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            addNewSemesterIndex();
            addNewSemester();
          }}
          className="fw-semibold"
        >
          Add Semester
        </Button>
        <Button onClick={toggleSemesterModal} className="fw-semibold">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SemestersModal;
