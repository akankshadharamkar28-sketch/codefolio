"use client";
import toast from "react-hot-toast";

import { useState } from "react";

export default function Projects() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    repoLink: "",
    liveLink: "",
    screenshot: "",
    featured: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      techStack: formData.techStack.split(",").map((item) => item.trim()),
    };

    const res = await fetch("/api/projects", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
     toast.success("Project added successfully 🚀");


      setFormData({
        title: "",
        description: "",
        techStack: "",
        repoLink: "",
        liveLink: "",
        screenshot: "",
         featured: false,
      });
    } else {
     toast.error(result.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-[#172554] p-10">
     <div className="mb-10 ">
  <h1 className="text-5xl font-extrabold text-white flex justify-center ">
    Add New Project 🚀
  </h1>

  <p className="text-slate-300 text-lg mt-3 flex justify-center">
    Showcase your best work with a premium project card.
  </p>
</div>
<div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 text-black hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-500"
      >
        <input
          name="title"
          required
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />

        <textarea
          name="description"
          required
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 mb-5 outline-none transition-all duration-300 resize-none focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />
        <input
          name="techStack"
          required
          placeholder="Tech Stack (React, Node, MongoDB)"
          value={formData.techStack}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />

        <input
          name="repoLink"
          required
          placeholder="Github Repository Link"
          value={formData.repoLink}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />

        <input
          name="liveLink"
          required
          placeholder="Live Project Link"
          value={formData.liveLink}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />

        <input
          name="screenshot"
          required
          placeholder="Screenshot URL"
          value={formData.screenshot}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />
        {formData.screenshot && (
          <img
            src={formData.screenshot}
            alt="preview"
            className="w-full h-56 rounded-2xl object-cover border border-slate-200 shadow-xl mb-6"
          />
        )}
<div className="flex items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-8">
  <input
    type="checkbox"
    id="featured"
    checked={formData.featured}
    onChange={(e) =>
      setFormData({
        ...formData,
        featured: e.target.checked,
      })
    }
    className="w-5 h-5"
  />

  <label htmlFor="featured" className="font-semibold text-lg">
    Featured Project ⭐
  </label>
</div>
        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white text-lg font-bold shadow-xl hover:scale-[1.02] hover:shadow-cyan-500/30 transition-all duration-300"
        >
          Add Project 🚀
        </button>
      </form>
      </div>
    </div>
  );
}
