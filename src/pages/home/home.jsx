import { useState } from 'react';
import About from "../../components/About";
import AboutGames from "../../components/AboutGames";
import GameCard from "../../components/GameCard";
import NavBar from "../../components/NavBar";
import DonateComponent from "../../components/DonateComponent";
import { gamesData } from "../../data/gamesData"
import './homeStyle.css';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredGames = gamesData.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <NavBar handleSearch={handleSearch} />
            <div className="page-div">
                <div id="Games" className="game-container">
                    {filteredGames.map((game, index) => (
                        <GameCard
                            key={index}
                            imageUrl={game.imageUrl}
                            title={game.title}
                            description={game.description}
                            gamePage={game.gamePage}
                        />
                    ))}
                </div>
                <div id="donate-section" className="donate-container">
                    <DonateComponent />
                </div>
                <div id="about-section" className="about-container">
                    <AboutGames />
                    <About />
                </div>
            </div>
        </>
    )
}

export default Home;