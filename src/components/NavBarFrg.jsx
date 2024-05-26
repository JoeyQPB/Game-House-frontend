import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function NavBarFrg() {

    const loggedInUserJSON = localStorage.getItem("loggedInUser");
    const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');
    let email;

    if (parseLoggedInUser) email = parseLoggedInUser.user.email.split('@')[0];

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
                        {parseLoggedInUser ? (
                            <Nav.Link as={Link} to="/profile">{email}</Nav.Link>
                        ) : (
                            <Nav.Link as={Link} to="/signIn">Sign In</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarFrg;