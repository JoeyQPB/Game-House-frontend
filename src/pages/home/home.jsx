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
                <div id="Games" className="game-container">
                    <GameCard
                        imageUrl="src/assets/joeykemon-pic.png"
                        title="JoeyKemon"
                        description="JoeyKemon description"
                    />
                    <GameCard
                        imageUrl="src/assets/spaceInvaders-pic.png"
                        title="Space Invaders"
                        description="Space Invaders Description"
                    />
                    <GameCard
                        imageUrl="src/assets/figthMaster-pic.png"
                        title="Figth Master"
                        description="Figth Master Description"
                    />
                    <GameCard
                        imageUrl="src/assets/shootGame-pic.png"
                        title="Shoot Game"
                        description="shootGame Description"
                    />
                    <GameCard
                        imageUrl="src/assets/KingJump-pic.png"
                        title="King Jump"
                        description="KingJump Description"
                    />
                    <GameCard
                        imageUrl="src/assets/hogart-pic.png"
                        title="hogart"
                        description="hogart game Description"
                    />
                    <GameCard
                        imageUrl="src/assets/littleSnake-pic.png"
                        title="littleSnake"
                        description="littleSnake Description"
                    />
                    <GameCard
                        imageUrl="src/assets/pacMan-pic.webp"
                        title="Pac Man"
                        description="Pac Man Description"
                    />
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