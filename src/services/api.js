const API_URL = "https://disc-assignment-5-users-api.onrender.com"

export const getAllUsers = async () => {
    const response = await fetch(
        (API_URL + "/api/users")
    );
    const data = await response.json();
    return data;
};

export const getUserByID = async () => {
    const response = await fetch(
        (API_URL + "/api/users/:id")
    );
    const data = await response.json();
    return data.results;
};

export const createUser = async () => {
    const response = await fetch(
        (API_URL + "/api/users")
    );
    const data = await response.json();
    return data.results;
};