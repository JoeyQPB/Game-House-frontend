import axios from "axios";

const apiURLs = {
    development: "http://localhost:8082",
    production: "",
};

const apiSuggestion = axios.create({ baseURL: apiURLs.development });

apiSuggestion.interceptors.request.use((config) => {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");

    const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');

    if (parseLoggedInUser.token) {
        config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
    }

    return config;
});

export default apiSuggestion;
