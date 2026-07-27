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
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-black mb-8">Edit Project ✨</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md max-w-xl"
      >
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Project Title"
          className="w-full border p-3 rounded mb-4 text-black"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full border p-3 rounded mb-4 text-black"
        />

        <input
          name="techStack"
          value={formData.techStack}
          onChange={handleChange}
          placeholder="Tech Stack (React, MongoDB)"
          className="w-full border p-3 rounded mb-4 text-black"
        />

        <input
          name="repoLink"
          value={formData.repoLink}
          onChange={handleChange}
          placeholder="Github URL"
          className="w-full border p-3 rounded mb-4 text-black"
        />

        <input
          name="liveLink"
          value={formData.liveLink}
          onChange={handleChange}
          placeholder="Live URL"
          className="w-full border p-3 rounded mb-4 text-black"
        />

        <input
          name="screenshot"
          value={formData.screenshot}
          onChange={handleChange}
          placeholder="Screenshot URL"
          className="w-full border p-3 rounded mb-4 text-black"
        />
        <div className="flex items-center gap-3 mb-5">
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

  <label className="text-black font-medium">
    Featured Project ⭐
  </label>
</div>

        <button className="bg-black text-white px-6 py-3 rounded">
          Update Project 🚀
        </button>
      </form>
    </div>
  );
}
