import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

function AppNavBar() {
  let step = useSelector(gs => gs.step);

  return (
      <Navbar className={"py-4"}>
        <Container>
          <Navbar.Brand>Online tests</Navbar.Brand>
          <Nav className="me-auto" activeKey="home">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="quiz" disabled={step < 1}>Quiz</Nav.Link>
            <Nav.Link as={Link} to="review" disabled={step < 2}>Review</Nav.Link>
            <Nav.Link as={Link} to="results" disabled={step < 3}>Results</Nav.Link>
          </Nav>
        </Container>
      </Navbar>);
}

export default AppNavBar;