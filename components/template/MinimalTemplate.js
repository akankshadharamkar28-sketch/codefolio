"use client";

import { Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function MinimalTemplate({ user, projects }) {
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
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-linear-to-br from-white via-slate-50 to-gray-200 border-b">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
          {user.profileImage && (
            <img
              src={user.profileImage}
              alt="profile"
              className="w-44 h-44 rounded-full mx-auto object-cover border-[6px] border-white shadow-2xl ring-4 ring-gray-200"
            />
          )}
<div className="flex justify-center items-center gap-3">
          <h1 className="text-6xl md:text-7xl font-extrabold text-black mt-8 tracking-tight">
            {user.name}
          </h1>

  {user.isPro && (
    <span className="px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
      ⭐ PRO
    </span>
  )}
</div>

          <p className="text-gray-500 text-xl mt-3">@{user.username}</p>

          <p className="mt-6 text-2xl font-semibold text-gray-700">
            Full Stack Developer 🚀
          </p>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-9">
            {user.bio}
          </p>

          <div className="flex justify-center gap-4 mt-8">
            {user.socialLinks?.github && (
              <a
                href={user.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-800 transition"
              >
                <Github size={20} />
                Github
              </a>
            )}

            {user.socialLinks?.linkedin && (
              <a
                href={user.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            )}
          </div>

          {user.skills?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {user.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-gray-900 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Projects */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          Featured Projects 🚀
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project) => (
            <div
              key={project._id}
              className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
  src={project.screenshot}
  alt={project.title}
  className="w-full h-60 object-cover hover:scale-105 transition duration-500"
/>

              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7 text-sm min-h-23.75">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5 min-h-[52px]">
                  {project.techStack?.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-gray-300 bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white text-center py-3 rounded-xl font-medium hover:shadow-lg transition cursor-pointer"
                  >
                    Github
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                   className="bg-black text-white text-center py-3 rounded-xl font-medium hover:shadow-lg transition cursor-pointer">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Contact Section */}

      <div className="bg-white py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black">Contact Me 📩</h2>

          <p className="text-gray-600 mt-3">
            Interested in working together? Send me a message.
          </p>
          <div className="bg-gray-50 rounded-3xl shadow-lg p-10 mt-10">
            <form
  onSubmit={handleSubmit}
  className="mt-10 space-y-5"
>
              <input type="hidden" name="toEmail" value={user.email} />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-xl px-5 py-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-xl px-5 py-4 text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition"
                required
              ></textarea>

              <button
  type="submit"
  disabled={loading}
  className="bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition disabled:opacity-60"
>
  {loading ? "Sending..." : "Send Message"}
</button>
{status && (
  <p className="text-center mt-4 font-medium text-green-600">
    {status}
  </p>
)}
            </form>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p>© 2026 {user.name}. Built with ❤️ using Next.js</p>
      </footer>
    </div>
  );
}
