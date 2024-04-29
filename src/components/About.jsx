/* eslint-disable react/no-unescaped-entities */
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#241178',
            padding: '20px',
            textAlign: 'center',
            color: 'Snow'
        }}>
            <h3 style={{ fontWeight: 'bold' }}>About</h3>
            <p style={{ width: '55rem' }}>
                At Game House, we're passionate about crafting engaging gaming experiences using the power of JavaScript, HTML, and CSS. Our games are meticulously developed with these technologies, ensuring seamless gameplay and stunning visuals.
            </p>
            <p style={{ width: '55rem' }}>
                As the developer behind the scenes, I've relied on tutorials and videos to hone my craft, constantly learning and growing to bring you the best gaming content possible. Thanks to platforms like GitHub Pages, deploying our games for you to enjoy is smoother than ever.
            </p>
            <p style={{ width: '55rem' }}>
                But Game House isn't just about showcasing games - it's also a community hub. We invite you to suggest new game ideas directly through our website under the "Games {'>'} Suggest New Game" section. Your input helps shape the future of Game House, making it a place where everyone's gaming desires can be fulfilled.
            </p>
            <p style={{ width: '55rem' }}>
                Additionally, if you appreciate the games we create and want to support further development, consider making a donation in the "Donate" section. Every contribution helps us continue doing what we love - making awesome games for you.
            </p>
            <p style={{ width: '55rem' }}>
                Curious to learn more about the mind behind Game House? Simply click on the LinkedIn or GitHub buttons to delve deeper into my journey as a developer.
            </p>
            <ListGroup horizontal style={{ justifyContent: 'center', marginTop: '20px', gap: '4rem' }}>
                <ListGroup.Item as={Link} to={"https://www.linkedin.com/in/joey-quadros/"} style={{ backgroundColor: '#0077B5', color: 'white', border: 'none' }}>
                    <img src="src/assets/linkedIn-logo.png" alt="LinkedIn Logo" style={{ width: '20px', marginRight: '5px' }} />
                    LinkedIn
                </ListGroup.Item>
                <ListGroup.Item as={Link} to={"https://github.com/JoeyQPB"} style={{ backgroundColor: 'black', color: 'white', border: 'none' }}>
                    <img src="src/assets/github-logo.jpg" alt="GitHub Logo" style={{ width: '20px', marginRight: '5px' }} />
                    GitHub
                </ListGroup.Item>
            </ListGroup>
        </div>
    );
}

export default About;
