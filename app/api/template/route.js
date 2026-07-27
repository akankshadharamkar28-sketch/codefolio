import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function PUT(request) {
  try {
    await connectDb();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { templateId } = await request.json();

    await User.findByIdAndUpdate(
      decoded.id,
      {
        templateId,
      }
    );

    return NextResponse.json({
      message: "Template Updated Successfully",
    });

  } catch (error) {

    return NextResponse.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
    );

  }
}