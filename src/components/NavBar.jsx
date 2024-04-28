import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const NavBar = ({ onSearch }) => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Game House</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/signIn">Sign In</Nav.Link>
                        <Nav.Link href='#donate-section'>Donate</Nav.Link>
                        <NavDropdown title="Games" id="navbarScrollingDropdown">
                            <NavDropdown.Item href='#about-section'>About Games</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/suggestNewGame">Suggest New Game</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='#about-section' style={{ color: 'grey' }}> About </Nav.Link>
                    </Nav>
                    <Form className="d-flex" onSubmit={(e) => { e.preventDefault(); }}>
                        <Form.Control
                            type="search"
                            placeholder="Search Game"
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => { onSearch(e.target.value) }}
                        />
                        <Button variant="outline-success" type="submit">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

NavBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default NavBar;
