'use client';
import { useState } from 'react';

export default function Home() {
    const [name, setName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState([]);
    const [skillName, setSkillName] = useState('');
    const [skillLogo, setSkillLogo] = useState('');
    const [skillLink, setSkillLink] = useState('');
    const [skillColor, setSkillColor] = useState('');

    const handleAddSkill = () => {
        const newSkill = {
            name: skillName,
            logo: skillLogo,
            link: skillLink,
            color: skillColor,
        };

        setSkills([...skills, newSkill]);
        setSkillName('');
        setSkillLogo('');
        setSkillLink('');
        setSkillColor('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            jobTitle,
            experience,
            skills,
        };

        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-gray-50 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Profile Information</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder="Enter your job title"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Experience (in years)</label>
                    <input
                        type="number"
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="Enter your years of experience"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            id="skillName"
                            value={skillName}
                            onChange={(e) => setSkillName(e.target.value)}
                            placeholder="Skill Name"
                            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id="skillLogo"
                            value={skillLogo}
                            onChange={(e) => setSkillLogo(e.target.value)}
                            placeholder="Skill Logo URL"
                            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id="skillLink"
                            value={skillLink}
                            onChange={(e) => setSkillLink(e.target.value)}
                            placeholder="Skill Documentation Link"
                            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                        <input
                            type="text"
                            id="skillColor"
                            value={skillColor}
                            onChange={(e) => setSkillColor(e.target.value)}
                            placeholder="Skill Color"
                            className="w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handleAddSkill}
                        className="w-full py-2 mt-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                        Add Skill
                    </button>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Added Skills</label>
                    <ul className="space-y-2">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex items-center space-x-4">
                                <img src={skill.logo} alt={skill.name} className="h-6 w-6" />
                                <span>{skill.name}</span>
                                <a href={skill.link} target="_blank" className="text-blue-500">
                                    Documentation
                                </a>
                                <span className={`text-sm ${skill.color}`}>{skill.color}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
