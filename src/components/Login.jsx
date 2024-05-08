import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
// import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../contexts/authContext'
// import apiGateway from '../api/apiGateway';

function LogIn() {
    const navigate = useNavigate();
    // const { setLoggedInUser } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            // const response = await api.post("/user/login", form);
            // setLoggedInUser({ ...response.data });
            // localStorage.setItem("loggedInUser", JSON.stringify(response.data));
            localStorage.setItem("loggedInUser", JSON.stringify(form));
            // setLoggedInUser({ form });


            console.log({ form })
            navigate("/");
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

                <Nav.Link as={Link} to="/signin" style={{
                    textDecoration: 'none',
                    color: 'grey',
                    textAlign: 'left',
                    paddingTop: '0.5rem',
                    paddingBottom: '1.5rem'
                }}>Create an account!</Nav.Link>

                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LogIn;
