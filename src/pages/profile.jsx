import NavBarFrg from '../components/NavBarFrg'
import ProfileComponent from '../components/profile/Profile.jsx'

const ProfilePage = () => {
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
                <h2 style={{ color: 'white' }}>Profile</h2>
                <ProfileComponent />
            </div>
        </>
    )
}

export default ProfilePage;