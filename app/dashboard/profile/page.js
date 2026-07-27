"use client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { useState, useEffect } from "react";


export default function Profile() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    
    name: "",
    username: "",
    bio: "",
    profileImage: "",
    github: "",
    linkedin: "",
    twitter: "",
    resumeUrl: "",
    skills: [],
  });
  const [skillsInput, setSkillsInput] = useState("");
  const calculateCompletion = () => {
    let completed = 0;

    if (formData.bio) completed += 15;

    if (formData.profileImage) completed += 15;

    if (formData.github) completed += 15;

    if (formData.linkedin) completed += 15;

    if (formData.resumeUrl) completed += 15;

    if (formData.skills.length > 0) completed += 25;

    return completed;
  };
  const completion = calculateCompletion();
  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch("/api/user/profile");

      const data = await res.json();

      if (data.user) {
        setSkillsInput((data.user.skills || []).join(", "));
        setFormData({

          name: data.user.name || "",

          username: data.user.username || "",

          bio: data.user.bio || "",

          profileImage: data.user.profileImage || "",

          github: data.user.socialLinks?.github || "",

          linkedin: data.user.socialLinks?.linkedin || "",

          twitter: data.user.socialLinks?.twitter || "",

          resumeUrl: data.user.resumeUrl || "",

          skills: data.user.skills || [],
        });
      }
    };

    getProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/user/profile", {
      method: "PUT",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    });

    const data = await res.json();

  if (res.ok) {

  toast.success("Profile updated successfully 🚀");

  setTimeout(() => {
    router.push("/dashboard");
  }, 1200);


} else {
  toast.error(data.message);
}
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-[#172554] p-10">
     <div className="mb-10">
  <h1 className="text-5xl font-extrabold text-white">
    Edit Profile ✨
  </h1>

  <p className="text-slate-300 mt-3 text-lg">
    Keep your portfolio updated and recruiter ready.
  </p>
</div>
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-7 mb-10 hover:shadow-cyan-500/10 transition-all duration-500">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold text-black">Profile Completion</h2>

          <span className="text-green-600 font-semibold">{completion}%</span>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
<div
  className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 h-3 rounded-full transition-all duration-700"
            style={{
              width: `${completion}%`,
            }}
          ></div>
        </div>

       <p className="text-slate-500 mt-4">
          Great! Your developer profile is complete.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <form
          onSubmit={handleSubmit}
         className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 text-black hover:-translate-y-1 hover:shadow-cyan-500/10 transition-all duration-500"
        >
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Bio
          </label>

          <input
            name="bio"
            value={formData.bio}
            placeholder="Your Bio"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Profile Image URL
          </label>
          <input
            name="profileImage"
            value={formData.profileImage}
            placeholder="Profile Image URL"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Github URL
          </label>

          <input
            name="github"
            value={formData.github}
            placeholder="GitHub URL"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            LinkedIn URL
          </label>
          <input
            name="linkedin"
            value={formData.linkedin}
            placeholder="LinkedIn URL"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Twitter URL
          </label>
          <input
            name="twitter"
            value={formData.twitter}
            placeholder="Twitter URL"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Resume URL
          </label>
          <input
            name="resumeUrl"
            value={formData.resumeUrl}
            placeholder="Resume URL"
            className="w-full border p-3 rounded mb-4"
            onChange={handleChange}
          />
          <label className="block mb-2 text-sm font-semibold text-gray-700">
            Skills
          </label>
          <input
  placeholder="React, Next.js, MongoDB"
  value={skillsInput}
  className="w-full border p-3 rounded mb-4"
  onChange={(e) => {
    setSkillsInput(e.target.value);

    setFormData({
      ...formData,
      skills: e.target.value
        .split(",")
        .map(skill => skill.trim())
        .filter(Boolean),
    });
  }}
/>

          <button
            type="submit"
            className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition"
          >
            Save Profile
          </button>
        </form>
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 text-black hover:-translate-y-1 hover:shadow-violet-500/10 transition-all duration-500">
          <h2 className="text-2xl font-bold mb-6">Live Preview 👀</h2>

          {formData.profileImage && (
            <img
              src={formData.profileImage}
              alt="profile"
              className="w-36 h-36 rounded-full object-cover mx-auto border-4 border-black shadow-lg"
            />
          )}

          <h3 className="text-3xl font-bold text-center mt-5">
            {formData.name || "Your Name"}
          </h3>

          <p className="text-center text-gray-500 mt-2">
            @{formData.username || "username"}
          </p>

          <p className="text-center text-gray-600 mt-5 leading-7">
            {formData.bio || "Your bio will appear here..."}
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {formData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            {formData.github && (
              <a
                href={formData.github}
                target="_blank"
                className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
              >
                Github
              </a>
            )}

            {formData.linkedin && (
              <a
                href={formData.linkedin}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
              >
                LinkedIn
              </a>
            )}

            {formData.resumeUrl && (
              <a
                href={formData.resumeUrl}
                target="_blank"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition"
              >
                Resume
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
