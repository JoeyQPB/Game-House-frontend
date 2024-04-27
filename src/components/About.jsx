import ListGroup from 'react-bootstrap/ListGroup';

function About() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' ,background: '#FFFACD' }}>
            <h2>About</h2>
            <p>Some short site description </p>
            <p>Some short me description </p>
            <ListGroup horizontal>
                <ListGroup.Item>LinkedIn</ListGroup.Item>
                <ListGroup.Item>GitHub</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default About;
