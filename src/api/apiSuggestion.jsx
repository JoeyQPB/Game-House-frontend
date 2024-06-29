import axios from "axios";

const apiURLs = {
    development: "localhost",
    production: "http://13.51.161.160:8082",
};

const apiSuggestion = axios.create({ baseURL: apiURLs.production });

apiSuggestion.interceptors.request.use((config) => {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");

    const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');

    if (parseLoggedInUser.token) {
        config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
    }

    return config;
});

export default apiSuggestion;
