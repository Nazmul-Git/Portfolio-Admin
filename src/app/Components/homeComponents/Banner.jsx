'use client';
import React, { useState } from "react";

const BannerForm = ({ setHomeData }) => {
    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        bio: "",
        resumeLink: "",
        image: null, // We'll store the image file here
    });

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    // Handle file input change for image
    const handleImageChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            image: e.target.files[0],
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a FormData object to handle file upload
        const formDataObj = new FormData();
        formDataObj.append("name", formData.name);
        formDataObj.append("bio", formData.bio);
        formDataObj.append("resumeLink", formData.resumeLink);
        formDataObj.append("image", formData.image);
        setHomeData(...formDataObj)
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center mb-6">Update Banner Information</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-white">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 text-lg text-black rounded-md"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label htmlFor="bio" className="block text-white">Bio</label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        className="w-full p-3 text-lg text-black rounded-md"
                        placeholder="Enter your bio"
                    />
                </div>

                <div>
                    <label htmlFor="resumeLink" className="block text-white">Resume Link</label>
                    <input
                        type="text"
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleInputChange}
                        className="w-full p-3 text-lg text-black rounded-md"
                        placeholder="Enter your resume link"
                    />
                </div>

                <div>
                    <label htmlFor="image" className="block text-white">Upload Profile Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleImageChange}
                        className="w-full p-3 text-lg text-black rounded-md"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-3 text-lg bg-blue-500 text-white rounded-full shadow-md"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BannerForm;
