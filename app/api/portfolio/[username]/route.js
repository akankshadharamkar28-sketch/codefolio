import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import User from "@/models/User";
import Project from "@/models/Project";


export async function GET(request,{params}){

  try{

    await connectDb();


    const {username}=params;


    const user = await User.findOne({
      username
    })
    .select("-password");


    if(!user){

      return NextResponse.json(
        {
          message:"User not found"
        },
        {
          status:404
        }
      );

    }


   const projects = await Project.find({
  userId: user._id,
  featured: true,
}).lean();


    return NextResponse.json({

      user,
      projects

    });


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