import NavBarFrg from '../components/NavBarFrg'
import SignIn from '../components/SignIn'

const SignInPage = () => {
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
                <h2 style={{ color: 'white' }}>Sign In</h2>
                <SignIn />
            </div>
        </>
    )
}

export default SignInPage;