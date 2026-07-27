import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    await connectDb();

    const body = await request.json();

    const { name, username, email, password } = body;

    // check existing user
    const existingUser = await User.findOne({
      email: email,
    });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User registered successfully 🚀",
        user,
      },
      {
        status: 201,
      }
    );

  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}