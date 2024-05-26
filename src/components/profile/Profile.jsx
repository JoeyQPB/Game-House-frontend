import { useState, useEffect } from 'react';
import './Profile.css';
import apiUser from '../../api/apiUser';
import apiSuggestion from '../../api/apiSuggestion';

function ProfileComponent() {
    const [profileData, setProfileData] = useState(null);
    const [suggestionData, setSuggestionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loggedInUserJSON = localStorage.getItem("loggedInUser");

        if (loggedInUserJSON) {
            const parseLoggedInUser = JSON.parse(loggedInUserJSON);
            if (parseLoggedInUser && parseLoggedInUser.user && parseLoggedInUser.user.email) {
                const email = parseLoggedInUser.user.email;

                // eslint-disable-next-line no-inner-declarations
                async function fetchData() {
                    try {
                        const response = await apiUser.get("/api/user/qe=" + email);
                        setProfileData(response.data);

                    } catch (error) {
                        setError('Error fetching profile data');
                        console.error('Error fetching profile data:', error);
                    } finally {
                        setLoading(false);
                    }
                }

                fetchData();
            } else {
                setLoading(false);
                setError('Invalid user data');
            }
        } else {
            setLoading(false);
            setError('No logged in user found');
        }
    }, []);


    useEffect(() => {
        const loggedInUserJSON = localStorage.getItem("loggedInUser");

        if (loggedInUserJSON) {
            const parseLoggedInUser = JSON.parse(loggedInUserJSON);
            if (parseLoggedInUser && parseLoggedInUser.user && parseLoggedInUser.user.email) {
                const email = parseLoggedInUser.user.email;

                // eslint-disable-next-line no-inner-declarations
                async function fetchData() {
                    try {
                        const suggestionsData = await apiSuggestion.get("/api/suggestion/getAllByAuthor/qe=" + email);
                        setSuggestionData(suggestionsData.data)

                    } catch (error) {
                        setError('Error fetching suggestion data');
                        console.error('Error fetching suggestion data:', error);
                    } finally {
                        setLoading(false);
                    }
                }

                fetchData();
            } else {
                setLoading(false);
                setError('Invalid user data');
            }
        } else {
            setLoading(false);
            setError('No logged in user found');
        }

    }, [])

    if (loading) {
        return <div style={{ color: 'white' }}>Loading...</div>;
    }

    if (error) {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    if (!profileData) {
        return null;
    }

    return (
        <div className="profile-container">
            <img src='src/assets/github-logo.jpg' alt="Profile" className="profile-photo" />
            <p className="profile-email">{profileData.email}</p>
            <h2 className="profile-title">Suggestions Made</h2>
            <table className="suggestions-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Suggestion</th>
                        <th>Consumed</th>
                    </tr>
                </thead>
                <tbody>
                    {suggestionData ? (
                        suggestionData.map((suggestion, index) => (
                            <tr key={index}>
                                <td>{suggestion.id}</td>
                                <td>{suggestion.email}</td>
                                <td>{suggestion.suggestion}</td>
                                <td>{suggestion.consumed ? 'Yes' : 'No'}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No suggestions found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ProfileComponent;