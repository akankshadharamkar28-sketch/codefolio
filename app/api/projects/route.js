import { NextResponse } from "next/server";
import connectDb from "@/lib/mongodb";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import Project from "@/models/Project";


export async function POST(request){

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


    const project = await Project.create({

      userId: payload.id,

      title: body.title,

      description: body.description,

      techStack: body.techStack,

      repoLink: body.repoLink,

      liveLink: body.liveLink,

      screenshot: body.screenshot,

      featured: body.featured,

    });


    return NextResponse.json(
      {
        message:"Project added successfully 🚀",
        project
      },
      {
        status:201
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


    const projects = await Project.find({
      userId:payload.id
    });


    return NextResponse.json(
      {
        projects
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
export async function DELETE(request){

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


    const {id} = await request.json();


    const project = await Project.findOneAndDelete({

      _id:id,

      userId:payload.id

    });


    if(!project){

      return NextResponse.json(
        {
          message:"Project not found"
        },
        {
          status:404
        }
      );

    }


    return NextResponse.json(
      {
        message:"Project deleted successfully 🗑️"
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


    const project = await Project.findOneAndUpdate(

      {
        _id: body.id,
        userId: payload.id
      },

      {

        title: body.title,

        description: body.description,

        techStack: body.techStack,

        repoLink: body.repoLink,

        liveLink: body.liveLink,

        screenshot: body.screenshot,

        featured: body.featured,

      },

      {
        new:true
      }

    );


    if(!project){

      return NextResponse.json(
        {
          message:"Project not found"
        },
        {
          status:404
        }
      );

    }


    return NextResponse.json(
      {
        message:"Project updated successfully 🚀",
        project
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