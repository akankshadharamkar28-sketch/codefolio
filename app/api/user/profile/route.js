import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import User from "@/models/User";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";


export async function GET(){

  try{

    await connectDb();


    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;


    if(!token){

      return NextResponse.json(
        {
          message:"Not logged in"
        },
        {
          status:401
        }
      );

    }


    const {payload} = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );


    const user = await User.findById(payload.id)
    .select("-password");


    return NextResponse.json(
      {
        user
      },
      {
        status:200
      }
    );


  }
  catch(error){

    return NextResponse.json(
      {
        message:error.message
      },
      {
        status:500
      }
    );

  }

}
export async function PUT(request){

  try{

    await connectDb();


    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;


    if(!token){

      return NextResponse.json(
        {
          message:"Not logged in"
        },
        {
          status:401
        }
      );

    }


    const {payload} = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );


    const body = await request.json();


    const updatedUser = await User.findByIdAndUpdate(
      payload.id,
      {
        bio: body.bio,
        profileImage: body.profileImage,
        resumeUrl: body.resumeUrl,

        socialLinks:{
          github: body.github,
          linkedin: body.linkedin,
          twitter: body.twitter
          
        },
         skills: Array.isArray(body.skills) ? body.skills : []
      },
       
      {
        new:true
      }
    )
    .select("-password");


    return NextResponse.json(
      {
        message:"Profile updated successfully 🚀",
        user:updatedUser
      },
      {
        status:200
      }
    );


  }
  catch(error){

    return NextResponse.json(
      {
        message:error.message
      },
      {
        status:500
      }
    );

  }

}