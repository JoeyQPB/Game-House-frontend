import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function SignIn() {
    return (
        <div style={{ background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40rem', padding: '1rem', border: '2px solid black', borderRadius: '20px' }}>
            <Form style={{ width: '30rem' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Nav.Link as={Link} to="/login" style={{
                    textDecoration: 'none',
                    color: 'grey',
                    textAlign: 'left',
                    paddingTop: '0.5rem',
                    paddingBottom: '1.5rem'
                }}>I already have an account!</Nav.Link>

                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                    Sign In
                </Button>
            </Form>
        </div>
    );
}

export default SignIn;
