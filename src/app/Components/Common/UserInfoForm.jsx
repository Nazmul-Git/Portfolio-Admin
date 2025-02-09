import { useState } from 'react';

const UserInfoForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        role1: '',
        role2: '',
        role3: '',
        email: '',
        phone: '',
        website: '',
        linkedin: '',
        facebook: '',
        twitter: '',
        instagram: '',
        github: '',
        university: '',
        cgpa: '',
        passingYear: '',
        file: null,
    });

    const [statusMessage, setStatusMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData({
                ...formData,
                file: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');
    
        const formDataToSend = new FormData();
    
        // Append text fields
        Object.keys(formData).forEach((key) => {
            if (key !== 'file') {
                formDataToSend.append(key, formData[key]);
            }
        });
    
        // Append the file
        if (formData.file) {
            formDataToSend.append('file', formData.file);
        }
    
        let response;
        try {
            // If the user does not exist, create new data (POST request)
            response = await fetch('http://localhost:3000/api/portfollio-user', {
                method: 'POST',
                body: formDataToSend,
            });
    
            // Check if response is successful (status code between 200-299)
            if (!response.ok) {
                // If the response is not okay, we try to parse the error message
                const result = await response.json();
                throw new Error(result.message || 'Failed to submit data');
            }
    
            const result = await response.json();
            setStatusMessage('Form submitted successfully! User information was created.');
            console.log(result);
        } catch (error) {
            // Catch any errors and set the status message
            setStatusMessage('Error submitting the form: ' + error.message);
            console.error(error);
        } finally {
            setLoading(false);
        }
    };    

    return (
        <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Information Form</h2>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Age */}
                <div className="mb-4">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Role1 */}
                <div className="mb-4">
                    <label htmlFor="role1" className="block text-sm font-medium text-gray-700">Employ Role 1</label>
                    <input
                        type="text"
                        id="role1"
                        name="role1"
                        value={formData.role1}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Role2 */}
                <div className="mb-4">
                    <label htmlFor="role2" className="block text-sm font-medium text-gray-700">Employ Role 2</label>
                    <input
                        type="text"
                        id="role2"
                        name="role2"
                        value={formData.role2}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Role3 */}
                <div className="mb-4">
                    <label htmlFor="role3" className="block text-sm font-medium text-gray-700">Employ Role 3</label>
                    <input
                        type="text"
                        id="role3"
                        name="role3"
                        value={formData.role3}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Website */}
                <div className="mb-4">
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700">Website</label>
                    <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Social Links */}
                <div className="mb-4">
                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn</label>
                    <input
                        type="url"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="facebook" className="block text-sm font-medium text-gray-700">Facebook</label>
                    <input
                        type="url"
                        id="facebook"
                        name="facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="twitter" className="block text-sm font-medium text-gray-700">Twitter</label>
                    <input
                        type="url"
                        id="twitter"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="instagram" className="block text-sm font-medium text-gray-700">Instagram</label>
                    <input
                        type="url"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="github" className="block text-sm font-medium text-gray-700">GitHub</label>
                    <input
                        type="url"
                        id="github"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* University */}
                <div className="mb-4">
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700">University</label>
                    <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* CGPA */}
                <div className="mb-4">
                    <label htmlFor="cgpa" className="block text-sm font-medium text-gray-700">CGPA</label>
                    <input
                        type="text"
                        id="cgpa"
                        name="cgpa"
                        value={formData.cgpa}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* Passing Year */}
                <div className="mb-4">
                    <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700">Passing Year</label>
                    <input
                        type="number"
                        id="passingYear"
                        name="passingYear"
                        value={formData.passingYear}
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                {/* File Upload */}
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload CV</label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        onChange={handleChange}
                        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {/* Status Message */}
            {statusMessage && (
                <div className="mt-4 text-center text-sm font-semibold">
                    <p className="text-green-500">{statusMessage}</p>
                </div>
            )}
        </div>
    );
};

export default UserInfoForm;
