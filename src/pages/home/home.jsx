import About from "../../components/About";
import AboutGames from "../../components/AboutGames";
import GameCard from "../../components/GameCard";
import NavBar from "../../components/NavBar";
import DonateComponent from "../../components/DonateComponent";
import './homeStyle.css';

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="page-div">
                <div className="game-container">
                    <GameCard
                        imageUrl="https://via.placeholder.com/150"
                        title="Game 1"
                        description="Description for Game 1"
                    />
                    <GameCard
                        imageUrl="https://via.placeholder.com/150"
                        title="Game 2"
                        description="Description for Game 2"
                    />
                    <GameCard
                        imageUrl="https://via.placeholder.com/150"
                        title="Game 3"
                        description="Description for Game 3"
                    />
                    <GameCard
                        imageUrl="https://via.placeholder.com/150"
                        title="Game 4"
                        description="Description for Game 4"
                    />
                    <GameCard
                        imageUrl="https://via.placeholder.com/150"
                        title="Game 5"
                        description="Description for Game 5"
                    />
                    <GameCard
                        imageUrl="https://via.placeholder.com/150"
                        title="Game 6"
                        description="Description for Game 6"
                    />
                </div>
                <div className="donate-container">
                    <DonateComponent />
                </div>
                <div className="about-container">
                    <AboutGames />
                    <About />
                </div>
            </div>
        </>
    )
}

export default Home;