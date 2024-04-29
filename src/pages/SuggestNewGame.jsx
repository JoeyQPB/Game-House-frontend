import NavBarFrg from '../components/NavBarFrg'
import SuggestNewGameComponent from '../components/SuggestNewGameComponent';

const SuggestNewGame = () => {
    return (
        <>
            <NavBarFrg />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '1.5rem',
                gap: '1rem',
            }}>
                <h2 style={{ color: 'white' }}>Sugestão de novo Jogo</h2>
                <SuggestNewGameComponent />
            </div>
        </>
    )
}

export default SuggestNewGame;