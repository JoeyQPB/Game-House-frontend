import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function GameCard({ imageUrl, title, description, gamePage }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Row xs={1} md={2} className="g-4">
            <Col>
                <Link to={gamePage} style={{ textDecoration: 'none' }}>
                    <Card
                        style={{
                            width: '35rem',
                            height: '10.7rem',
                            border: '6px solid #00008b',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <Row noGutters>
                            <Col xs={4}>
                                <Card.Img
                                    variant="top"
                                    src={imageUrl}
                                    style={{ height: '10rem', width: '12rem', objectFit: 'cover' }}
                                />
                            </Col>
                            <Col xs={8}>
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            fontSize: '20px',
                                            fontWeight: 'bold',
                                            color: '#333',
                                            textAlign: 'center',
                                            textTransform: 'uppercase',
                                            marginBottom: '10px',
                                        }}
                                    >
                                        {title}
                                    </Card.Title>
                                    <Card.Text
                                        style={{
                                            fontSize: '14px',
                                            color: '#666',
                                            textAlign: 'center',
                                            marginBottom: '20px',
                                        }}
                                    >
                                        {description}
                                    </Card.Text>
                                    {isHovered && (
                                        <h1
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                                color: '#fff',
                                                padding: '10px',
                                                transition: '0.3s ease-in-out',
                                            }}
                                        >
                                            Play Now
                                        </h1>
                                    )}
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Link>
            </Col>
        </Row>
    );
}

GameCard.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    gamePage: PropTypes.string.isRequired
};

export default GameCard;
