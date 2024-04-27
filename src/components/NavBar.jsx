import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid >
                <Navbar.Brand href="#gotohome">Game House</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Sign In</Nav.Link>
                        <Nav.Link href="#action2">Donate</Nav.Link>
                        <NavDropdown title="Games" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">About Games</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Suggest New Game</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action5" style={{color: 'grey'}}> About </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search Game"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;