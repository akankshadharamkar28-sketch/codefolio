import connectDb from "@/lib/mongodb";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDb();

    const user = await User.create({
      name: "Demo User",
      username: "demo",
      email: "demo@gmail.com",
      password: "123456",
      bio: "My CodeFolio portfolio",
      templateId: "minimal",
    });

    return Response.json({
      message: "User created successfully 🚀",
      user,
    });

  } catch (error) {
    return Response.json({
      error: error.message,
    });
  }
}