import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: '#4169E1' }}>
            <h2>About</h2>
            <p>Some short site description </p>
            <p>Some short me description </p>
            <ListGroup horizontal>
                <ListGroup.Item as={Link} to={"https://www.linkedin.com/in/joey-quadros/"} >LinkedIn</ListGroup.Item>
                <ListGroup.Item as={Link} to={"https://github.com/JoeyQPB"} >GitHub</ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default About;
