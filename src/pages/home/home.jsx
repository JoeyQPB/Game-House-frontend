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
                        description="Explore diverse regions, capturing and training Pokémon.
                         Engage in turn-based battles against other trainers and wild Pokémon to become the ultimate Pokémon Master."
                        gamePage="https://joeyqpb.github.io/JoeyKemon-/"
                    />
                    <GameCard
                        imageUrl="src/assets/spaceInvaders-pic.png"
                        title="Space Invaders"
                        description="Defend Earth from an onslaught of descending alien invaders by controlling a laser cannon.
                         Move horizontally to aim and shoot at the invaders while dodging their incoming fire.
                         Destroy all aliens before they reach the bottom of the screen to progress to the next wave."
                        gamePage="https://joeyqpb.github.io/Space-Invaders/"
                    />
                    <GameCard
                        imageUrl="src/assets/figthMaster-pic.png"
                        title="Figth Master"
                        description="Engage in intense sword duels with a friend in this thrilling two-player game.
                         Choose your character and clash swords in fast-paced battles."
                        gamePage="https://joeyqpb.github.io/Fight-Master/"
                    />
                    <GameCard
                        imageUrl="src/assets/shootGame-pic.png"
                        title="Shoot Game"
                        description="Take control of a point at the center of the screen as balls approach from all sides. 
                         Click to shoot and break incoming balls, testing your reflexes and aiming skills.
                         Survive as long as possible to achieve the highest score."
                        gamePage="https://joeyqpb.github.io/Shoot-Game/"
                    />
                    <GameCard
                        imageUrl="src/assets/KingJump-pic.png"
                        title="King Jump"
                        description="Take on the role of a majestic king on a quest for adventure.
                         Navigate through the kingdom by leaping across the map, discovering hidden treasures, and overcoming obstacles.
                         Explore the realm to uncover its secrets and establish your royal legacy."
                        gamePage="https://joeyqpb.github.io/King-Jump/"
                    />
                    <GameCard
                        imageUrl="src/assets/hogart-pic.png"
                        title="hogart"
                        description="Embark on an epic journey through multiple levels as a fearless medieval warrior.
                         Navigate treacherous obstacles, defeat enemies, and solve puzzles to reach the exit door and advance to the next level."
                        gamePage="https://joeyqpb.github.io/Hogart-o-Terrivel-game/"
                    />
                    <GameCard
                        imageUrl="src/assets/littleSnake-pic.png"
                        title="littleSnake"
                        description="Guide a growing snake to consume food while avoiding walls and its own tail.
                         Keep the snake moving to score points and prevent it from crashing."
                        gamePage="https://joeyqpb.github.io/little-snake/"
                    />
                    <GameCard
                        imageUrl="src/assets/pacMan-pic.webp"
                        title="Pac Man"
                        description="Guide the iconic yellow character through a maze, gobbling up dots and fruit while evading colorful ghosts.
                         Eat power pellets to turn the tables and chase down the ghosts. Clear each maze to advance to the next level."
                        gamePage="building"
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