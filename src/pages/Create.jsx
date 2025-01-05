import "../css/Create.css";
import { useState } from "react";
import { createUser } from "../services/api";

function Create() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        bio: "",
        major: "",
        graduationyear: "",
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        createUser(formData);
    };

    return (
        <div className="create-profile">
            <h1>Create A New Profile</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="form">
            <div>
            <label htmlFor="firstname" className="form-label">First Name:</label>
            <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
                className = "form-input"
            />
            </div>
            <div>
            <label htmlFor="lastname" className="form-label"> Last Name:</label>
            <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
                className = "form-input"
            />
            </div>
            <div>
            <label htmlFor="email" className="form-label">Email:</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className = "form-input"
            />
            </div>
            <div>
            <label htmlFor="bio" className="form-label">Bio:</label>
            <input
                type="text"
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                required
                className = "form-input"
            />
            </div>
            <div>
            <label htmlFor="major" className="form-label">Major:</label>
            <input
                type="text"
                id="major"
                name="major"
                value={formData.major}
                onChange={handleChange}
                required
                className = "form-input"
            />
            </div>
            <div>
            <label htmlFor="graduationyear" className="form-label">Graduation Year:</label>
            <input
                type="text"
                id="graduationyear"
                name="graduationyear"
                value={formData.graduationyear}
                onChange={handleChange}
                required
                className = "form-input"
            />
            </div>
            <div>
            <label htmlFor="image" className="form-label">Image:</label>
            <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleFileChange}
                required
                className = "form-input"
            />
            </div>
            <button type="submit" className="submit-form-button">Submit</button>
            </form>
        </div>
    )
}

export default Create