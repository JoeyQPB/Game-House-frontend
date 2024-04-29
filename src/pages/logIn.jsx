import NavBarFrg from '../components/NavBarFrg'
import LogIn from '../components/Login'

const LoginPage = () => {
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
                <h2 style={{ color: 'white' }}>Login</h2>
                <LogIn />
            </div>
        </>
    )
}

export default LoginPage;