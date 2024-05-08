import NavBarFrg from '../components/NavBarFrg'
import ProfileComponent from '../components/profile/Profile.jsx'
import Button from "react-bootstrap/Button";
// import { useContext } from "react";
// import { AuthContext } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {

    // const { loggedInUser, setLoggedInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleSignOut() {
        localStorage.removeItem("loggedInUser");
        // setLoggedInUser(null);
        navigate("/");
    }

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
                <Button
                    variant="danger"
                    onClick={() => {
                        handleSignOut();
                    }}
                >
                    Sign out
                </Button>
            </div>
        </>
    )
}

export default ProfilePage;