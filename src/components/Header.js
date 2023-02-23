import { Navbar, Nav, Container } from 'react-bootstrap';
import gpcalcImg from '../images/gpa-calculator.png';

const Header = () => (
  <header className="mb-5">
    <Navbar expand="lg" bg="transparent">
      <Container>
        <Navbar.Brand href="/">
          <img src={gpcalcImg} alt="Gpa calculator logo" width="96px" />
        </Navbar.Brand>
        <Nav className="w-50">
          <Navbar.Text>
            <em className="fs-4 fw-semibold header-fs text-white">
              Choose your scale and calculate your CGPA
            </em>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  </header>
);

export default Header;
