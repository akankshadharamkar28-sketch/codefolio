"use client";

import { useState } from "react";

import { Github, Linkedin } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Mail } from "lucide-react";
import AuroraBackground from "./AuroraBackground";

export default function ModernTemplate({ user, projects }) {
  const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setStatus("");

  const formData = new FormData(e.target);

  const res = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });

  const data = await res.json();

  if (data.success) {
    setStatus("✅ Message sent successfully!");
    e.target.reset();
  } else {
    setStatus("❌ Failed to send message.");
  }

  setLoading(false);
};
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,#0f172a,#020617)] text-white">

  <AuroraBackground />
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="text-center space-y-5 relative z-10">

          {user.profileImage && (
          <img
  src={user.profileImage}
  alt="profile"
  className="w-44 h-44 rounded-full mx-auto object-cover border-[6px] border-slate-900 shadow-2xl ring-4 ring-cyan-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 hover:ring-cyan-400"
/>
          )}
<div className="flex justify-center items-center gap-3">
          <h1 className="text-6xl md:text-7xl font-extrabold mt-8 tracking-tight bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
            {user.name}
          </h1>
           {user.isPro && (
    <span className="px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
      ⭐ PRO
    </span>
  )}
</div>

          <p className="text-slate-400 text-lg mt-3">
            @{user.username}
          </p>

          <p className="max-w-3xl mx-auto mt-6 text-lg leading-9 text-slate-300">
            {user.bio}
          </p>
          <p className="text-cyan-300 font-medium tracking-wide text-lg">
  Full Stack Developer • React • Next.js • MongoDB
</p>
        

          <div className="flex justify-center gap-4 mt-8">

            {user.socialLinks?.github && (
              <a
                href={user.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
             className="flex items-center justify-center gap-2 bg-white text-black px-7 py-3 rounded-2xl font-semibold shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300"
              >
                <Github size={18} />
               Github

              </a>
            )}

            {user.socialLinks?.linkedin && (
              <a
                href={user.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-cyan-500 text-black px-7 py-3 rounded-2xl font-semibold shadow-xl hover:scale-105 hover:-translate-y-1 transition duration-300">
                <Linkedin size={18} />

                LinkedIn
              </a>
            )}

          </div>

        </div>
        {user.skills?.length > 0 && (
  <div className="flex flex-wrap justify-center gap-3 mt-8">
    {user.skills.map((skill, index) => (
      <span
        key={index}
       className="bg-cyan-500/15 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-full text-sm hover:bg-cyan-500 hover:text-black transition duration-300 cursor-default"
      >
        {skill}
      </span>
    ))}
  </div>
)}
<div className="text-center mt-20 mb-14">

<h2 className="text-5xl font-black">
<span className="text-white">Featured</span>{" "}
<span className="text-cyan-400">Projects</span>
</h2>

<p className="text-slate-400 mt-4">
Crafting responsive, scalable and user-focused digital experiences.
</p>

<div className="w-24 h-1 bg-cyan-400 rounded-full mx-auto mt-6"></div>

</div>
        <div className="flex flex-wrap justify-center gap-8 mt-16">

          {projects.map((project) => (

            <div
              key={project._id}
              className=" group w-full max-w-sm bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl overflow-hidden border border-slate-700 shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-5 hover:scale-[1.02] hover:border-cyan-400 hover:ring-2 hover:ring-cyan-500/30 transition-all duration-700 flex flex-col"
            >

            <div className="overflow-hidden">
  <img
    src={project.screenshot}
    alt={project.title}
  className="w-full h-56 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
  />
</div>

              <div className="p-6 flex flex-col flex-1">

                <h2 className="text-2xl font-bold tracking-wide group-hover:text-cyan-300 group-hover:translate-x-1 transition-all duration-300">
                  {project.title}
                </h2>

               <p className="text-slate-400 mt-3 leading-7 text-sm min-h-24">
                  {project.description}
                </p>

              <div className="flex flex-wrap items-start gap-2 mt-5 min-h-[56px] content-start">
  {project.techStack?.map((tech, index) => (
    <span
      key={index}
      className="inline-flex items-center justify-center whitespace-nowrap border border-cyan-400 bg-cyan-500/15 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium"
    >
      {tech}
    </span>
  ))}
</div>

<div className="grid grid-cols-2 gap-4 mt-6">
  <a
    href={project.repoLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg transition"
  >
   <Github size={18} />
<span>Github</span>
  </a>

  <a
    href={project.liveLink}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-cyan-500 text-black py-3 rounded-xl font-semibold hover:bg-cyan-400 hover:-translate-y-1 hover:shadow-lg transition"
  >
    <ExternalLink size={18} />
<span>Live Demo</span>
  </a>
</div>

              </div>

            </div>

          ))}

        </div><div className="max-w-5xl mx-auto mt-24">
  <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-10">

    <div className="text-center">
      <h2 className="text-5xl md:text-6xl font-black tracking-tight">
        <span className="text-white">Let's</span>{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
          Connect
        </span>
      </h2>

      <p className="text-slate-400 mt-5 max-w-2xl mx-auto text-lg leading-8">
        Have an opportunity, project, or collaboration in mind?
        <br />
        I'd love to hear from you and build something amazing together.
      </p>
    </div>

    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto mt-12 space-y-5"
    >
      <input type="hidden" name="toEmail" value={user.email} />

      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Write your message..."
        required
        className="w-full rounded-2xl border border-white/10 bg-slate-800/70 px-5 py-4 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
      />

      <div className="flex flex-wrap justify-center gap-5 pt-2">

        <button
          type="submit"
          disabled={loading}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-sky-500 text-black font-bold hover:scale-105 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {user.socialLinks?.github && (
          <a
            href={user.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-cyan-500 hover:text-black transition"
          >
            <Github className="inline mr-2" size={18} />
            Github
          </a>
        )}

        {user.socialLinks?.linkedin && (
          <a
            href={user.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl bg-slate-800 hover:bg-cyan-500 hover:text-black transition"
          >
            <Linkedin className="inline mr-2" size={18} />
            LinkedIn
          </a>
        )}

      </div>

      {status && (
        <p className="text-center mt-5 text-cyan-300 font-medium">
          {status}
        </p>
      )}
    </form>

  </div>
</div>
<footer className="mt-24 border-t border-slate-800">

  <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

    <p className="text-slate-400 text-sm tracking-wide">
  © {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">{user.name}</span>.
  Crafted with ❤️ using Next.js
</p>
    <div className="flex gap-6">

      {user.socialLinks?.github && (
        <a
          href={user.socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 hover:scale-125 transition-all duration-300"
        >
          <Github size={22} />
        </a>
      )}

      {user.socialLinks?.linkedin && (
        <a
          href={user.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-cyan-400 hover:-translate-y-1 hover:scale-125 transition-all duration-300"
        >
          <Linkedin size={22} />
        </a>
      )}

    </div>

  </div>

</footer>
      </div>
    </div>
  );
}