const API_URL = "https://disc-assignment-5-users-api.onrender.com";

export const getAllUsers = async () => {
    const response = await fetch(`${API_URL}/api/users`);
    const data = await response.json();
    return data;
};

export const getUserByID = async (id) => {
    const response = await fetch(`${API_URL}/api/users/${id}`);
    const data = await response.json();
    return data;
};

export const createUser = async () => {

    const postData = new FormData();
    postData.append("firstname", postData.firstname);
    postData.append("lastname", postData.lastname);
    postData.append("email", postData.email);
    postData.append("bio", postData.bio);
    postData.append("major", postData.major);
    postData.append("graduationyear", postData.graduationyear);
    postData.append("image", postData.image);

    const response = await fetch(`${API_URL}/api/users`, {
        method: "POST",
        body: postData                      
    });

    if (response.ok) {
        console.log("Profile created successfully.");
    } else {
            console.log("Failed to create profile.");
    }
};