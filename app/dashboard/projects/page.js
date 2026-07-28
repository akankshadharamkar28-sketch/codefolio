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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-[#172554] p-4 sm:p-6 lg:p-10">
     <div className="mb-10 ">
  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white flex justify-center text-center">
    Add New Project 🚀
  </h1>

  <p className="text-slate-300 text-base sm:text-lg mt-3 flex justify-center text-center px-2">
    Showcase your best work with a premium project card.
  </p>
</div>
<div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white rounded-3xl border border-slate-200 shadow-2xl p-5 sm:p-8 text-black hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-500"
      >
        <input
          name="title"
          required
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />

        <textarea
          name="description"
          required
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-5 outline-none transition-all duration-300 resize-none focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />
        <input
          name="techStack"
          required
          placeholder="Tech Stack (React, Node, MongoDB)"
          value={formData.techStack}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />

        <input
          name="repoLink"
          required
          placeholder="Github Repository Link"
          value={formData.repoLink}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />

        <input
          name="liveLink"
          required
          placeholder="Live Project Link"
          value={formData.liveLink}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />

        <input
          name="screenshot"
          required
          placeholder="Screenshot URL"
          value={formData.screenshot}
          onChange={handleChange}
          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
        />
        {formData.screenshot && (
          <img
            src={formData.screenshot}
            alt="preview"
            className="w-full h-44 sm:h-56 rounded-2xl object-cover border border-slate-200 shadow-xl mb-6"
          />
        )}
<div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8">
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

  <label htmlFor="featured" className="font-semibold text-base sm:text-lg text-center">
    Featured Project ⭐
  </label>
</div>
        <button
          type="submit"
          className="w-full py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white text-base sm:text-lg font-bold shadow-xl hover:scale-[1.02] hover:shadow-cyan-500/30 transition-all duration-300"
        >
          Add Project 🚀
        </button>
      </form>
      </div>
    </div>
  );
}
