// import { useState, useEffect } from 'react';
import './Profile.css';

function ProfileComponent() {
    // const [profileData, setProfileData] = useState(null);

    // useEffect(() => {
    //     fetch('url_da_sua_api')
    //         .then(response => response.json())
    //         .then(data => setProfileData(data))
    //         .catch(error => console.error('Error fetching profile data:', error));
    // }, []);

    return (
        <div className="profile-container">
            {/* {profileData && ( */}
            <>
                {/* <img src={profileData.photo} alt="Profile" className="profile-photo" />
                    <p className="profile-email">{profileData.email}</p>
                    <h2 className="profile-title">Suggestions Made</h2>
                    <ul className="suggestions-list">
                        {profileData.suggestions.map((suggestion, index) => (
                            <li key={index}>{suggestion}</li>
                        ))}
                    </ul> */}
                <img src='src/assets/github-logo.jpg' alt="Profile" className="profile-photo" />
                <p className="profile-email">exemple@email.com</p>
                <h2 className="profile-title">Suggestions Made:</h2>
                <ul className="suggestions-list">
                    <li key='1'>suggestion 1</li>
                    <li key='2'>suggestion 2</li>
                    <li key='3'>suggestion 3</li>
                    <li key='4'>suggestion 4</li>
                </ul>
            </>
            {/* )} */}
        </div>
    );
}

export default ProfileComponent;
