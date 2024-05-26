import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import apiSuggestion from '../api/apiSuggestion';


function SuggestNewGameComponent() {

    const [form, setForm] = useState({
        email: "",
        suggestion: "",
    });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await apiSuggestion.post("/api/suggestion", { ...form });
            console.log({ form })
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
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSugestion">
                    <Form.Label>Sugestion</Form.Label>
                    <Form.Control
                        name="suggestion"
                        type="text"
                        placeholder="Create a PacMake a Mario-style game with marine characters..."
                        value={form.suggestion}
                        onChange={handleChange} />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                    Send
                </Button>
            </Form>
        </div>
    );
}

export default SuggestNewGameComponent;
