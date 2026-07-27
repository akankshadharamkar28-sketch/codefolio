import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export async function POST(request) {

  try {

    await connectDb();

    const body = await request.json();

    const { email, password } = body;



// find user
const user = await User.findOne({
  email
});


  

    if(!user){
      return NextResponse.json(
        {
          message:"User not found"
        },
        {
          status:404
        }
      )
    }


    // compare password

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password
    );
    

    if(!isPasswordCorrect){

      return NextResponse.json(
        {
          message:"Invalid password"
        },
        {
          status:400
        }
      )

    }


    // create token

    const token = jwt.sign(
      {
        id:user._id,
        username:user.username
      },
      process.env.JWT_SECRET,
      {
        expiresIn:"7d"
      }
    );
   const cookieStore = await cookies();

cookieStore.set(
  "token",
  token,
  {
    httpOnly:true,
    secure:false,
    maxAge:60*60*24*7,
    path:"/"
  }
);

    return NextResponse.json(
      {
        message:"Login successful 🚀",
        token,
        user:{
          name:user.name,
          username:user.username,
          email:user.email
        }
      },
      {
        status:200
      }
    )


  } catch (error) {
  return NextResponse.json(
    {
      message: "Something went wrong",
      error: error.message
    },
    {
      status: 500
    }
  );
}

}