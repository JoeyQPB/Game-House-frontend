import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavBarFrg() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid >
                <Navbar.Brand as={Link} to="/">Game House</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavBarFrg;