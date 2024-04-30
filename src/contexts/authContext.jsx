import PropTypes from 'prop-types';
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

function AuthContextComponent(props) {
    const [loggedInUser, setLoggedInUser] = useState();

    useEffect(() => {
        const storedUser = localStorage.getItem("loggedInUser");

        const parsedStoredUser = JSON.parse(storedUser || '""');

        if (parsedStoredUser.token) {
            setLoggedInUser(parsedStoredUser);
        } else {
            setLoggedInUser(null);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}
null
AuthContextComponent.propTypes = {
    children: PropTypes.any.isRequired,
};

export { AuthContext, AuthContextComponent };