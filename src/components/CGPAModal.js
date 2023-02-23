import { Button, Modal } from 'react-bootstrap';
import { useContext } from 'react';
import { CalculatorContext } from '../calculatorContext/useCalculatorContext';

export const CGPAModal = () => {
  const { toggleCGPAModal, showCGPAModal, CGPA } =
    useContext(CalculatorContext);

  return (
    <Modal show={showCGPAModal} onHide={toggleCGPAModal}>
      <Modal.Header className="fw-bold" closeButton>
        View my CGPA
      </Modal.Header>
      <Modal.Body>
        <p className="text-center fw-semibold">Your CGPA is</p>
        <p className="text-center fw-semibold">
          {Number.isNaN(CGPA) ? '0.00' : CGPA}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={toggleCGPAModal} className="fw-semibold">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
