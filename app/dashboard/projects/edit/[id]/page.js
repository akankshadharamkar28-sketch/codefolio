"use client";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function EditProject() {
  const router = useRouter();

  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    repoLink: "",
    liveLink: "",
    screenshot: "",
     featured: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProject = async () => {
      const res = await fetch("/api/projects");

      const data = await res.json();

      const project = data.projects.find((p) => p._id === id);

      if (project) {
        setFormData({
          title: project.title,

          description: project.description,

          techStack: project.techStack.join(", "),

          repoLink: project.repoLink,

          liveLink: project.liveLink,

          screenshot: project.screenshot,

           featured: project.featured,
        });
      }
      setLoading(false);
    };

    if (id) {
      getProject();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/projects", {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id,

        ...formData,

        techStack: formData.techStack.split(",").map((item) => item.trim()),
      }),
    });

    const data = await res.json();

    if (res.ok) {
     toast.success("Project updated successfully 🚀");


      router.push("/dashboard");
    } else {
      toast.error(data.message);
    }
  };
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-[#172554] px-4 sm:px-6 lg:px-10 py-6 sm:py-8 sm:py-10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-center mb-10">Edit Project ✨</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full w-full max-w-xl mx-auto bg-white/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-5 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-cyan-500/20 p-5 sm:p-8 rounded-3xl shadow-md w-full max-w-xl w-full mx-auto"
      >
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Project Title"
         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-4 text-black outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200 hover:border-violet-300 hover:shadow-md"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-4 text-black outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200 hover:border-violet-300 hover:shadow-md"
        />

        <input
          name="techStack"
          value={formData.techStack}
          onChange={handleChange}
          placeholder="Tech Stack (React, MongoDB)"
         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-4 text-black outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200 hover:border-violet-300 hover:shadow-md"
        />

        <input
          name="repoLink"
          value={formData.repoLink}
          onChange={handleChange}
          placeholder="Github URL"
         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-4 text-black outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200 hover:border-violet-300 hover:shadow-md"
        />

        <input
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          placeholder="Live URL"
         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-4 text-black outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200 hover:border-violet-300 hover:shadow-md"
        />

        <input
          name="screenshot"
          value={formData.screenshot}
          onChange={handleChange}
          placeholder="Screenshot URL"
         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-4 text-black outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200 hover:border-violet-300 hover:shadow-md"
        />
        <div className="flex items-center justify-between gap-3 bg-gray-50 border rounded-2xl p-4 sm:p-5 mb-6">
  <input
    type="checkbox"
    checked={formData.featured}
    onChange={(e) =>
      setFormData({
        ...formData,
        featured: e.target.checked,
      })
    }
    className="w-5 h-5"
  />

  <label className="text-black font-medium text-sm sm:text-base">
    Featured Project ⭐
  </label>
</div>

        <button className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:scale-[1.02] transition">
          Update Project 🚀
        </button>
      </form>
    </div>
  );
}
