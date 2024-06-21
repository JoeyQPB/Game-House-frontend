import axios from "axios";

const apiURLs = {
    development: "http://3.133.98.250:8081",
    production: "",
};

const apiUser = axios.create({ baseURL: apiURLs.development });

apiUser.interceptors.request.use((config) => {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");

    const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');

    if (parseLoggedInUser.token) {
        config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
    }

    return config;
});

export default apiUser;