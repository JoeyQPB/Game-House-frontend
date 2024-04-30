import axios from "axios";

// const apiURLs = {
//     development: "",
//     production: "",
// };

const apiGateway = axios.create({ baseURL: "" });

apiGateway.interceptors.request.use((config) => {
    const loggedInUserJSON = localStorage.getItem("loggedInUser");

    const parseLoggedInUser = JSON.parse(loggedInUserJSON || '""');

    if (parseLoggedInUser.token) {
        config.headers = { Authorization: `Bearer ${parseLoggedInUser.token}` };
    }

    return config;
});

export { apiGateway };