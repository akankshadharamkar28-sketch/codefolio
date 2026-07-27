import connectDb from "@/lib/mongodb";
import User from "@/models/User";
import Project from "@/models/Project";
import { Github, Linkedin, Mail } from "lucide-react";
import MinimalTemplate from "@/components/template/MinimalTemplate";
import ModernTemplate from "@/components/template/ModernTemplate";
import GradientTemplate from "@/components/template/GradientTemplate";

export async function generateMetadata({ params }) {
  const { username } = await params;

  return {
    title: `${username} | Full Stack Developer Portfolio`,
    description:
      "Portfolio website showcasing projects, skills and experience in React, Next.js and MongoDB.",
  };
}


export default async function Portfolio({ params }) {
  const { username } = await params;

  await connectDb();

  const user = await User.findOne({
    username: username,
  })
    .select("-password")
    .lean();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black">
        User not found
      </div>
    );
  }

 const projects = await Project.find({
  userId: user._id,
  featured: true,
}).lean();
const serializedUser = JSON.parse(JSON.stringify(user));
const serializedProjects = JSON.parse(JSON.stringify(projects));

if (user.templateId === "minimal") {
 return (
  <MinimalTemplate
    user={serializedUser}
    projects={serializedProjects}
  />
);
}
if (user.templateId === "modern") {
  return (
    <ModernTemplate
      user={serializedUser}
      projects={serializedProjects}
    />
  );
}

if (user.templateId === "gradient") {
  return (
    <GradientTemplate
      user={serializedUser}
      projects={serializedProjects}
    />
  );
}
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-white to-gray-200 py-10 px-5">
      <nav className="max-w-5xl mx-auto mb-8 bg-white rounded-2xl shadow-md px-6 py-4 flex justify-between items-center border">
        <h2 className="text-2xl font-bold text-black">{user.name}</h2>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="text-gray-700 hover:text-black font-semibold"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-gray-700 hover:text-black font-semibold"
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-10 text-black text-center border">
        {user.profileImage && (
          <img
            src={user.profileImage}
            alt="profile"
            className="w-36 h-36 rounded-full object-cover mb-6 mx-auto border-4 border-black shadow-lg"
          />
        )}

       <div className="flex justify-center items-center gap-3">
  <h1 className="text-5xl md:text-6xl font-extrabold">
    {user.name}
  </h1>

  {user.isPro && (
    <span className="px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
      ⭐ PRO
    </span>
  )}
</div>

        <p className="text-gray-500 mt-2 text-lg">@{user.username}</p>
        <p className="mt-3 text-xl font-semibold text-gray-800">
          Full Stack Developer 🚀
        </p>

        <p className="mt-2 text-gray-500 max-w-xl mx-auto">
          Building modern web applications using React, Next.js & MongoDB.
        </p>

        <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
          {user.bio || "Developer"}
        </p>

        <div className="mt-6 flex justify-center gap-4">
          {user.socialLinks?.github && (
            <a
              href={user.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:scale-105 transition"
            >
              <Github size={22} />
              Github
            </a>
          )}

          {user.socialLinks?.linkedin && (
            <a
              href={user.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:scale-105 transition"
            >
              <Linkedin size={22} />
              LinkedIn
            </a>
          )}
        </div>
        {user.resumeUrl && (
          <a
            href={user.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            Download Resume 📄
          </a>
        )}
        <div className="mt-5">
          <h2 className="text-xl font-bold">Skills 🚀</h2>

          <div className="flex flex-wrap gap-2 mt-3">
            {user.skills?.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div id="projects" className="max-w-4xl mx-auto mt-8">
        <h2 className="text-4xl font-extrabold text-black mb-6">
          Featured Projects 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

  {projects.length === 0 ? (

    <p className="text-gray-500 text-lg">
      No featured projects yet.
    </p>

  ) : (

    projects.map((project) => (
            <div
              key={project._id.toString()}
              className="bg-white rounded-2xl shadow-lg overflow-hidden text-black hover:shadow-2xl hover:-translate-y-2 transition duration-300 border"
            >
              <img
                src={project.screenshot || "/projects/default.png"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-extrabold">{project.title}</h3>

              <p className="mt-3 text-gray-700 text-sm leading-6 min-h-[72px]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2">
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  className="text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                  >
                    Github
                  </a>

                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                   className="text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
        </div>
      </div>
      <div
        id="contact"
        className="max-w-5xl mx-auto mt-16 bg-white rounded-3xl shadow-xl p-10 text-center border"
      >
        <h2 className="text-4xl font-extrabold text-black">Let's Connect 🚀</h2>

        <p className="mt-4 text-gray-600 text-lg">
          Interested in working together? Feel free to reach out.
        </p>

        <a
          href={`mailto:${user.email}`}
          className="inline-block mt-6 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Contact Me 📩
        </a>
        <div className="flex justify-center gap-5 mt-6">
          {user.socialLinks?.github && (
            <a
              href={user.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white p-3 rounded-full hover:scale-110 transition"
            >
              <Github size={24} />
            </a>
          )}

          {user.socialLinks?.linkedin && (
            <a
              href={user.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full hover:scale-110 transition"
            >
              <Linkedin size={24} />
            </a>
          )}
        </div>
      </div>
      <footer className="text-center mt-16 text-gray-600">
        <p>© 2026 {user.name}. Built with Next.js 🚀</p>
      </footer>
    </div>
  );
}
