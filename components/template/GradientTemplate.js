"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function GradientTemplate({ user, projects }) {
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
    setStatus("✅ Message Sent Successfully");
    e.target.reset();
  } else {
    setStatus("❌ Failed to send message");
  }

  setLoading(false);
};
  return (
   <div className="relative min-h-screen overflow-hidden bg-[#030712] text-white">



  <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-violet-600/35 blur-[140px] rounded-full"></div>

  <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-cyan-500/30 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-20 left-1/3 w-[500px] h-[500px] bg-fuchsia-500/20 blur-[140px] rounded-full"></div>

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_60%)]"></div>
  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center py-16 px-12 relative z-10 bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,.45)] animate-[fadeIn_1s_ease]">

        {user.profileImage && (
          <img
            src={user.profileImage}
            alt="profile"
            className="w-44 h-44 rounded-full mx-auto object-cover border-[6px] border-white/10 ring-[12px] ring-violet-500/10 shadow-[0_0_120px_rgba(139,92,246,.6)] hover:scale-105 transition-all duration-700 ease-out"
          />
        )}

      <div className="flex justify-center items-center gap-4 flex-wrap">

  <h1 className="text-6xl md:text-7xl font-black tracking-[-2px] bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_8px_35px_rgba(255,255,255,.15)]">
    {user.name}
  </h1>

 {user.isPro && (
  <div className="relative group">

    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 blur-md opacity-70 group-hover:opacity-100 transition duration-500"></div>

    <span className="relative flex items-center gap-2 px-6 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-yellow-300/40 text-yellow-300 font-bold tracking-wider shadow-xl overflow-hidden">

      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent"></span>

      👑

      <span>PRO Developer</span>

    </span>

  </div>
)}
</div>
<p className="uppercase tracking-[8px] text-violet-300 text-sm mt-5">
SOFTWARE ENGINEER
</p>
        <p className="mt-4 text-lg text-white/50 font-medium">
          @{user.username}
        </p>

        <p className="mt-8 text-2xl font-bold text-white">
          Full Stack Developer 🚀
        </p>

        <p className="mt-6 max-w-2xl mx-auto text-lg opacity-90 leading-8">
          {user.bio}
        </p>

        {/* Social Buttons */}

        <div className="flex justify-center gap-5 mt-8">

          {user.socialLinks?.github && (
            <a
              href={user.socialLinks.github}
              target="_blank"
              className="px-7 py-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 hover:border-violet-400 transition-all duration-300 shadow-xl"
            >
              <Github className="inline mr-2" size={20} />
              Github
            </a>
          )}

          {user.socialLinks?.linkedin && (
            <a
              href={user.socialLinks.linkedin}
              target="_blank"
              className="px-7 py-3 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl hover:bg-cyan-500 hover:border-cyan-300 transition-all duration-300 shadow-xl"
            >
              <Linkedin className="inline mr-2" size={20} />
              LinkedIn
            </a>
          )}

        </div>

        {/* Skills */}

        {user.skills?.length > 0 && (

          <div className="flex flex-wrap justify-center gap-3 mt-10">

            {user.skills.map((skill, index) => (

              <span
                key={index}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500/30 hover:border-violet-400 transition-all duration-300 shadow-lg"
              >
                {skill}
              </span>

            ))}

          </div>

        )}

      </div>
      <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-8"></div>
      <div className="mt-8 flex justify-center">

<div className="w-7 h-12 rounded-full border border-white/20 flex justify-center">

<div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>

</div>

</div>

      {/* Projects */}
   <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-14"></div>

<div className="max-w-7xl mx-auto px-6 pb-24 mt-2">

  <div className="text-center mb-20">

    <h2 className="text-6xl md:text-7xl md:text-6xl font-black">
      Selected Works
    </h2>
<div className="w-36 h-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-400 to-cyan-400 mx-auto mt-6"></div>
    <p className="mt-5 text-lg text-white/60 max-w-2xl mx-auto">
      Some of my favourite projects crafted with modern web technologies.
    </p>

  </div>
<div className="bg-white/[0.04] border border-white/10 hover:border-violet-500/40 rounded-[36px] backdrop-blur-xl p-10 shadow-[0_30px_80px_rgba(0,0,0,.35)] transition-all duration-500">
 <div
  className={`grid gap-10 ${
    projects.length === 1
      ? "grid-cols-1 max-w-lg mx-auto"
      : projects.length === 2
      ? "md:grid-cols-2 max-w-4xl mx-auto"
      : "md:grid-cols-2 lg:grid-cols-3"
  }`}
>
          {projects.map((project) => (

           <div
  key={project._id}
  className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-violet-500 hover:shadow-[0_0_40px_rgba(34,211,238,.5)] hover:-translate-y-4 hover:rotate-[0.4deg] transition-all duration-700 ease-out shadow-[0_15px_50px_rgba(0,0,0,.4)]"
>
  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-transparent to-cyan-500/0 group-hover:from-violet-500/10 group-hover:to-cyan-500/10 transition-all duration-700"></div>
              <img
                src={project.screenshot}
                alt={project.title}
                 
                className="w-full h-56 object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-4 opacity-90">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.techStack?.map((tech, index) => (

                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-violet-500/15 text-violet-300 border border-violet-400/20 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="grid grid-cols-2 gap-3 mt-6">

                  <a
                    href={project.repoLink}
                    target="_blank"
                    className="rounded-xl py-3 text-center bg-white/10 border border-white/10 hover:bg-gradient-to-r hover:from-violet-500 hover:to-fuchsia-500 transition-all"
                  >
                    Github
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    className="rounded-xl py-3 text-center bg-gradient-to-r from-cyan-400  via-blue-500 to-violet-600 hover:scale-105 transition-all"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>
          </div>

      </div>

      {/* Contact Section */}

<section className="max-w-6xl mx-auto px-6 pb-24">

  <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.45)]">

    {/* Background Glow */}

    <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-500/20 blur-[120px] rounded-full"></div>

    <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

    <div className="relative z-10 px-10 py-20 text-center">

      <p className="uppercase tracking-[8px] text-violet-300 text-sm">
        CONTACT
      </p>

      <h2 className="mt-5 text-5xl md:text-6xl font-black leading-[1.15] pb-2 bg-gradient-to-r from-white via-violet-200 to-cyan-300 bg-clip-text text-transparent">
        Let's Build Something Amazing
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-white/65 leading-8">
        I'm currently available for freelance work, internships and exciting
        full-stack projects. If you have an idea, let's build it together.
      </p>

      {/* Status */}

      <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-emerald-400/20 bg-emerald-500/10">

        <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>

        <span className="text-emerald-300 font-medium">
          Available for Freelance
        </span>

      </div>

      {/* Buttons */}

     {/* Contact Form */}

<div className="max-w-3xl mx-auto mt-10">

<form
onSubmit={handleSubmit}
className="space-y-5"
>

<input
type="hidden"
name="toEmail"
value={user.email}
/>

<div className="grid md:grid-cols-2 gap-5">

<input
type="text"
name="name"
placeholder="Your Name"
required
className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
/>

<input
type="email"
name="email"
placeholder="Your Email"
required
className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
/>

</div>

<input
type="text"
name="subject"
placeholder="Subject"
required
className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
/>

<textarea
rows="6"
name="message"
placeholder="Write your message..."
required
className="w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4 outline-none resize-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
/>

<button
type="submit"
disabled={loading}
className="w-full rounded-2xl py-4 font-bold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 hover:scale-[1.02] transition duration-300 shadow-xl disabled:opacity-50"
>

{loading ? "Sending..." : "Send Message"}

</button>

</form>

{status && (
<p className="mt-5 text-center text-cyan-300 font-medium">
{status}
</p>
)}

</div>
<div className="mt-12 flex flex-wrap justify-center gap-5">

  {user.socialLinks?.github && (
    <a
      href={user.socialLinks.github}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-cyan-500 hover:text-black hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
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
      className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-cyan-500 hover:text-black hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
    >
      <Linkedin className="inline mr-2" size={18} />
      LinkedIn
    </a>
  )}

  {user.resumeUrl && (
    <a
      href={user.resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-cyan-500 hover:text-black hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
    >
      Resume
    </a>
  )}

  <a
    href={`mailto:${user.email}`}
    className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-cyan-500 hover:text-black hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
  >
    <Mail className="inline mr-2" size={18} />
    Email
  </a>

</div>

    </div>

  </div>

</section>

      {/* Footer */}

     <footer className="border-t border-white/10 mt-14">

<div className="max-w-6xl mx-auto py-12 text-center text-white/60">

<p className="text-xl font-semibold text-white">
© 2026 {user.name}
</p>

<p className="mt-3 text-white/40">
Designed & Developed with ❤️ using Next.js, React & Tailwind CSS
</p>

</div>

</footer>

    </div>
  );
}