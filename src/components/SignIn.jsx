import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import apiGateway from '../api/apiGateway';

function SignIn() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            // await apiGateway.post("/user/signup", { ...form });
            console.log({ form })
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40rem', padding: '1rem', border: '2px solid black', borderRadius: '20px' }}>
            <Form style={{ width: '30rem' }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange} />
                    <Form.Text className="text-muted">We will never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={form.password}
                        onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        value={form.confirmPassword}
                        onChange={handleChange} />
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
