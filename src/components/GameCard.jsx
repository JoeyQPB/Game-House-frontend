import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GameCard({ imageUrl, title, description }) {
    return (
        <Row xs={1} md={2} className="g-4">
            {
                <Col >
                    <Card style={{width: '35rem', height: '10.7rem'}}>
                        <Row noGutters >
                            <Col xs={4}>
                                <Card.Img variant="top" src={imageUrl} />
                            </Col>
                            <Col xs={8}>
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <Card.Text>{description}</Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            }
        </Row>
    );
}

GameCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default GameCard;
