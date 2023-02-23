import { Button, Modal } from 'react-bootstrap';
import { useContext } from 'react';
import { CalculatorContext } from '../calculatorContext/useCalculatorContext';

export const GPAModal = () => {
  const {
    semesterGpa,
    toggleGPAModal,
    showGPAModal,
    semester,
    semesterIndex,
    activeSemesterIndex,
  } = useContext(CalculatorContext);

  return (
    <Modal show={showGPAModal} onHide={toggleGPAModal}>
      <Modal.Header className="fw-bold" closeButton>
        View my{' '}
        {semesterIndex[activeSemesterIndex].semesterName
          ? semesterIndex[activeSemesterIndex].semesterName
          : `Semester ${parseInt(activeSemesterIndex) + 1}`}{' '}
        GPA
      </Modal.Header>
      <Modal.Body>
        <p className="text-center fw-semibold">
          Your{' '}
          {semesterIndex[activeSemesterIndex].semesterName
            ? semesterIndex[activeSemesterIndex].semesterName
            : `Semester ${parseInt(activeSemesterIndex) + 1}`}{' '}
          GPA is
        </p>
        <p className="text-center fw-semibold">
          {Number.isNaN(semesterGpa(semester)) ? '0.00' : semesterGpa(semester)}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={toggleGPAModal} className="fw-semibold">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
