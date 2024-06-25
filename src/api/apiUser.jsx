import axios from "axios";

const apiURLs = {
    development: "localhost",
    production: "http://3.133.98.250:8081",
};

const apiUser = axios.create({ baseURL: apiURLs.production });

apiUser.interceptors.request.use((config) => {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");

    const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');

    if (parseLoggedInUser.token) {
        config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
    }

    return config;
});

export default apiUser;