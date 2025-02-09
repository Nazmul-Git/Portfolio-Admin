import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/connectDB';
import PortfolioUserModel from '@/app/lib/dataModel/portfolioUserModel';

// Handle POST request (updated to handle FormData)
export async function POST(req) {
  try {
    // Use req.formData() to handle multipart/form-data
    const formData = await req.formData();

    // Extract the necessary fields from formData
    const name = formData.get('name');
    const age = formData.get('age');
    const role1 = formData.get('role1');
    const role2 = formData.get('role2');
    const role3 = formData.get('role3');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const website = formData.get('website');
    const linkedin = formData.get('linkedin');
    const facebook = formData.get('facebook');
    const twitter = formData.get('twitter');
    const instagram = formData.get('instagram');
    const github = formData.get('github');
    const university = formData.get('university');
    const cgpa = formData.get('cgpa');
    const passingYear = formData.get('passingYear');

    // Validate if required fields are provided
    if (!name || !age || !role1 || !email || !phone || !university || !cgpa || !passingYear) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }
    await connectDB();

    // Prepare socialLinks as a map
    const socialLinks = {};
    if (linkedin) socialLinks.linkedin = linkedin;
    if (facebook) socialLinks.facebook = facebook;
    if (twitter) socialLinks.twitter = twitter;
    if (instagram) socialLinks.instagram = instagram;
    if (github) socialLinks.github = github;

    // prepare profession as a map
    const professions = {};
    if(role1) professions.role1 = role1;
    if(role2) professions.role2 = role2;
    if(role3) professions.role3 = role3;

    // Check if the user exists by email
    let existingUser = await PortfolioUserModel.findOne({ email });

    if (existingUser) {
      // Update the user's information
      existingUser.name = name;
      existingUser.age = age;
      existingUser.professions = professions;
      existingUser.phone = phone;
      existingUser.website = website || '';
      existingUser.socialLinks = socialLinks; 
      existingUser.university = university;
      existingUser.cgpa = cgpa;
      existingUser.passingYear = passingYear;

      // Save the updated user data
      await existingUser.save();

      return NextResponse.json(
        { message: 'User info updated successfully' },
        { status: 200 }
      );
    } else {
      // If the user doesn't exist, create a new user
      const newUser = new PortfolioUserModel({
        name,
        age,
        professions,
        email,
        phone,
        website: website || '',
        socialLinks, 
        university,
        cgpa,
        passingYear,
      });

      // Save the new user data
      await newUser.save();

      return NextResponse.json(
        { message: 'User info saved successfully' },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error('Error handling POST request:', error);
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
