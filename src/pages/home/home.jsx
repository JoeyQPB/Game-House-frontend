import { useState } from 'react';
import { gamesData } from "../../data/gamesData";
import NavBar from '../../components/NavBar';
import GameCard from "../../components/GameCard";
import DonateComponent from "../../components/DonateComponent";
import AboutGames from "../../components/AboutGames";
import About from "../../components/About";
import './homeStyle.css';

const Home = () => {
    const [query, setQuery] = useState('');

    const getFilterItems = (query, items) => {
        if (!query) return items;
        return items.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    }
    const filteredItems = getFilterItems(query, gamesData);

    return (
        <>
            <NavBar onSearch={setQuery} />

            <div className="page-div">
                <div id="Games" className="game-container">
                    {filteredItems.map((game, index) => (
                        <GameCard
                            key={index}
                            imageUrl={game.imageUrl}
                            title={game.title}
                            description={game.description}
                            gamePage={game.gamePage}
                        />
                    ))}
                </div>
            </div>

            <div className="bottom-content-container">
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
