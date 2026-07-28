"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function Dashboard() {
  const router = useRouter();
 const templateImages = {
  minimal: "/projects/minimal.png",
  modern: "/projects/modern.png",
  gradient: "/projects/gradient.png",
};

  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);

  const deleteProject = async (id) => {
const result = await Swal.fire({
  title: "Delete Project?",
  text: `Are you sure you want to delete "${projects.find(p => p._id === id)?.title}"?`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#ef4444",
  cancelButtonColor: "#6b7280",
  confirmButtonText: "🗑 Delete",
  cancelButtonText: "Cancel",
  reverseButtons: true,
});

if (!result.isConfirmed) return;
    const res = await fetch("/api/projects", {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id: id,
      }),
    });

    const data = await res.json();

    if (res.ok) {
     Swal.fire({
  icon: "success",
  title: "Deleted!",
  text: "Your project has been deleted successfully.",
  timer: 1800,
  showConfirmButton: false,
});

      setProjects(projects.filter((project) => project._id !== id));
    } else {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const userRes = await fetch("/api/user/profile");

      const userData = await userRes.json();

      setUser(userData.user);

      const projectRes = await fetch("/api/projects");

      const projectData = await projectRes.json();

      setProjects(projectData.projects || []);
    };

    getData();
  }, []);
  

if (!user) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-5">

        <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

        <h2 className="text-xl font-semibold text-gray-700">
          Loading Dashboard...
        </h2>

      </div>
    </div>
  );
}
const profileFields = [
  user.bio,
  user.profileImage,
  user.resumeUrl,
  user.socialLinks?.github,
  user.socialLinks?.linkedin,
  user.skills?.length > 0,
];

const completedFields = profileFields.filter(Boolean).length;

const completion = Math.round(
  (completedFields / profileFields.length) * 100
);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-4 sm:p-6">
      <nav className="sticky top-4 sm:top-5 z-50 backdrop-blur-xl bg-white/10 border border-white/10 rounded-3xl shadow-2xl p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
       <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide text-center">CodeFolio 🚀</h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <span className="text-white font-semibold">
            Welcome {user.name}
          </span>

          <button
            onClick={() => router.push("/dashboard/profile")}
            className="w-full sm:w-auto px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-105 transition"
          >
            Profile
          </button>
        </div>
      </nav>

      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 p-5 sm:p-8 text-black mb-8">
       <h2 className="text-2xl sm:text-3xl font-extrabold">Developer Profile 👋</h2>
<div className="flex flex-col lg:flex-row gap-8 mt-8">

  <div className="flex flex-col items-center lg:items-start">

    {user.profileImage && (

      <img
        src={user.profileImage}
        alt="profile"
        className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-violet-500 shadow-xl object-cover"
      />

    )}

   <div className="mt-5 flex items-center gap-3">

  <h2 className="text-2xl sm:text-3xl font-bold">
    {user.name}
  </h2>

  {user.isPro && (
    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold shadow-lg">
      ⭐ PRO
    </span>
  )}

</div>

    <p className="text-gray-500">
      @{user.username}
    </p>

    <p className="text-gray-500 mt-1">
      {user.email}
    </p>

  </div>

  <div className="flex-1">

    <p className="font-semibold text-gray-700">
      Portfolio URL
    </p>

    <div className="flex flex-col sm:flex-row gap-3 mt-3">

      <input
        value={`${window.location.origin}/${user.username}`}
        readOnly
        className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-gray-50"
      />

      <button
        onClick={()=>{
          navigator.clipboard.writeText(
            `${window.location.origin}/${user.username}`
          );
          toast.success("Copied 🚀");
        }}
        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold"
      >
        Copy
      </button>

    </div>

  </div>

</div>

        <div className="mt-8">

  {/* Bio */}

  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">

    <h3 className="text-lg font-bold mb-2">
      About Me
    </h3>

    <p className="text-gray-600 leading-7">
      {user.bio || "Add your developer bio"}
    </p>

  </div>

  {/* Social */}

  <div className="mt-6">

    <h3 className="text-lg font-bold mb-3">
      Connect With Me
    </h3>

    <div className="flex flex-wrap gap-3">

      {user.socialLinks?.github && (

        <a
          href={user.socialLinks.github}
          target="_blank"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-900 to-black text-white font-semibold hover:scale-105 transition"
        >
          Github
        </a>

      )}

      {user.socialLinks?.linkedin && (

        <a
          href={user.socialLinks.linkedin}
          target="_blank"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold hover:scale-105 transition"
        >
          LinkedIn
        </a>

      )}

    </div>

  </div>

  {/* Skills */}

  <div className="mt-8">

    <h3 className="text-lg font-bold mb-3">
      Tech Stack
    </h3>

    <div className="flex flex-wrap gap-3">

      {user.skills?.map((skill,index)=>(

        <span
          key={index}
          className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-100 to-cyan-100 text-slate-700 font-semibold border border-slate-200 hover:scale-105 transition"
        >
          {skill}
        </span>

      ))}

    </div>

  </div>

  {/* Button */}

  <div className="mt-8">

    <button
      onClick={()=>router.push("/dashboard/profile")}
      className="w-full sm:w-auto px-8 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white font-bold shadow-xl hover:scale-105 transition"
    >
      Edit Profile
    </button>

  </div>

</div>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl hover:-translate-y-2 hover:shadow-violet-500/20 transition-all duration-500">
          <h3 className="uppercase tracking-widest text-xs text-gray-500 font-bold">Projects</h3>

          <p className="text-5xl font-black mt-3 text-violet-600">{projects.length}</p>
        </div>

        <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl hover:-translate-y-2 hover:shadow-violet-500/20 transition-all duration-500">
          <h3 className="uppercase tracking-widest text-xs text-gray-500 font-bold">Skills</h3>

          <p className="text-5xl font-black mt-3 text-cyan-600">{user.skills?.length || 0}</p>
        </div>

        <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl p-7 shadow-2xl hover:-translate-y-2 hover:shadow-violet-500/20 transition-all duration-500">
          <h3 className="uppercase tracking-widest text-xs text-gray-500 font-bold">Portfolio</h3>

          <p className="text-5xl font-black mt-3 text-violet-600">Live</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

    <div className="flex items-center justify-between">

        <div>
            <p className="text-sm uppercase tracking-[3px] text-gray-400">
                PROFILE
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold mt-2 text-black">
                {completion}% Complete
            </h2>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-violet-100 flex items-center justify-center text-3xl">
            👤
        </div>

    </div>

    <div className="mt-8 w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        <div
            className="h-full bg-gradient-to-r from-violet-600 to-cyan-500 rounded-full transition-all duration-700"
            style={{
                width: `${completion}%`,
            }}
        ></div>

    </div>

   <div className="mt-7 space-y-4">

  <div className="flex items-center gap-3">
    <span className="text-green-500 text-xl">✔</span>
    <span className="text-slate-800 font-medium text-[16px]">
      Resume Uploaded
    </span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-green-500 text-xl">✔</span>
    <span className="text-slate-800 font-medium text-[16px]">
      Skills Added
    </span>
  </div>

  <div className="flex items-center gap-3">
    <span className="text-green-500 text-xl">✔</span>
    <span className="text-slate-800 font-medium text-[16px]">
      Social Links Added
    </span>
  </div>

</div>

    <button
        onClick={() => router.push("/dashboard/profile")}
        className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
    >
        Edit Profile
    </button>

</div>

       <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-5 sm:p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">

    <div className="flex justify-between items-center">

        <div>

            <p className="uppercase tracking-[3px] text-sm text-gray-400">
                PROJECTS
            </p>

            <h2 className="text-4xl font-black mt-2 text-black">
                {projects.length}
            </h2>

        </div>

        <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-3xl">
            📁
        </div>

    </div>

    <p className="text-gray-500 mt-5">
        Showcase your best work.
    </p>

    <div className="mt-8 flex gap-3">

        <button
            onClick={() => router.push("/dashboard/projects")}
            className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-[1.02] transition"
        >
            + Add Project
        </button>

        <button
            onClick={() => router.push("/dashboard/projects")}
            className="px-6 rounded-2xl border border-gray-300 hover:bg-gray-100 transition text-black font-bold"
        >
            View
        </button>

    </div>

</div>

        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-2xl hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-500">

  {/* Preview Image */}

  <div className="relative group">
<div className="overflow-hidden rounded-t-3xl bg-gray-100">
  <img
    src={templateImages[user.templateId]}
    alt="Template Preview"
    className="w-full h-56 sm:h-64 lg:h-72 object-cover object-top transition-all duration-500 hover:scale-105"
  />
</div>
<div className="border-t border-gray-100"></div>

    {/* Active Badge */}

    <div className="absolute top-4 right-4">

      <span className="bg-emerald-500 text-white text-xs font-bold px-5 py-2 rounded-full shadow-xl border border-white">

        ACTIVE

      </span>

    </div>

  </div>

  {/* Content */}

  <div className="p-5">

    <p className="text-xs uppercase tracking-[4px] text-gray-400">
      CURRENT TEMPLATE
    </p>

    <h2 className="mt-2 text-3xl sm:text-4xl font-black tracking-tight text-black capitalize">
      {user.templateId}
    </h2>

    <p className="text-gray-500 mt-3">
      Your portfolio is currently using the{" "}
      <span className="font-semibold capitalize">
        {user.templateId}
      </span>{" "}
      template.
    </p>
    <div className="mt-6 flex gap-3 justify-center flex-wrap">

<span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs">
Responsive
</span>

<span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs">
Modern UI
</span>

<span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs">
Production Ready
</span>

</div>

    <button
      onClick={() => router.push("/dashboard/template")}
      className="mt-8 w-full py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white font-semibold shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
    >
      Change Template
    </button>

  </div>

</div>
      </div>
      <div className="mt-10">
       <div className="flex justify-center mb-8 mt-3">
  <div className="inline-flex items-center gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl">
    <span className="text-4xl">🚀</span>

    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-wide bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
      Your Projects
    </h2>
  </div>
</div>

       {projects.length === 0 ? (

<div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 text-center">

<h3 className="text-2xl sm:text-3xl font-bold text-black">
🚀 No Projects Yet
</h3>

<p className="text-gray-600 mt-3">
Start by adding your first project to showcase your work.
</p>

<button
onClick={() => router.push("/dashboard/projects")}
className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
>
Add Your First Project
</button>

</div>


) : (

<div className="flex flex-wrap justify-center gap-8">
  
          {projects.map((project) => (
          <div
  key={project._id}
  className="group bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden border border-slate-200  shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_25px_60px_rgba(124,58,237,0.20)] hover:-translate-y-3  transition-all duration-500 w-full sm:w-[360px] flex-shrink-0">
              {project.screenshot && (
                <img
                  src={project.screenshot}
                  alt={project.title}
                  className="w-full h-48 sm:h-52 object-cover group-hover:scale-105 transition duration-700"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm sm:text-[15px] leading-6 sm:leading-7 text-slate-600 min-h-[84px]">
                  {project.description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4">

  <span className="text-sm font-semibold text-gray-700">
    Featured Project
  </span>

  <button
    onClick={async () => {

      const res = await fetch("/api/projects", {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({

          id: project._id,

          title: project.title,

          description: project.description,

          techStack: project.techStack,

          repoLink: project.repoLink,

          liveLink: project.liveLink,

          screenshot: project.screenshot,

          featured: !project.featured,

        }),
      });

      if(res.ok){

        setProjects(prev =>
          prev.map(p =>
            p._id===project._id
              ? {...p,featured:!p.featured}
              : p
          )
        );

        toast.success("Updated");

      }

    }}

    className={`w-14 h-8 rounded-full transition relative ${
      project.featured
        ? "bg-green-500"
        : "bg-gray-300"
    }`}
  >

    <span
      className={`absolute top-1 left-1 bg-white w-6 h-6 rounded-full transition ${
        project.featured
          ? "translate-x-6"
          : ""
      }`}
    />

  </button>

</div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                    className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href={project.repoLink}
                    target="_blank"
                   className="w-full text-center bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                    Github
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="w-full text-center bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition"
                  >
                    Live
                  </a>
                  <button
                    onClick={() => deleteProject(project._id)}
                  className="w-full bg-red-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-red-700 active:scale-95 transition"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() =>
                      router.push(`/dashboard/projects/edit/${project._id}`)
                    }
                   className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 active:scale-95 transition"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
              )}
      </div>
      
              </div>
  );
}
