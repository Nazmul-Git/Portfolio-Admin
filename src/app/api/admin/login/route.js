import { NextResponse } from 'next/server';
import UserModel from '@/app/lib/dataModel/userModel';
import connectDB from '@/app/lib/connectDB';

export async function POST(req) {
  const { username, password, rememberMe } = await req.json();

  await connectDB();

  const validUsername = process.env.USER;
  const validPassword = process.env.PASSWORD;

  if (username === validUsername && password === validPassword) {
    const newUser = new UserModel({
      username,
      password,
      rememberMe,
    });
    console.log(newUser)

    try {
      await newUser.save();

      return NextResponse.json(
        {
          message: 'Login successful',
          user: { username },
        },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: 'Error saving data to database' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { message: 'Invalid username or password' },
      { status: 401 }
    );
  }
}
