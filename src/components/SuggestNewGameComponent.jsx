import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SuggestNewGameComponent() {
    return (
        <div style={{ background: 'lightgrey', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40rem', padding: '1rem', border: '2px solid black', borderRadius: '20px' }}>
            <Form style={{ width: '30rem' }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSugestion">
                    <Form.Label>Sugestion</Form.Label>
                    <Form.Control type="text" placeholder="Create a PacMake a Mario-style game with marine characters..." />
                </Form.Group>

                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                    Send
                </Button>
            </Form>
        </div>
    );
}

export default SuggestNewGameComponent;
