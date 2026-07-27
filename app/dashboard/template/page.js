"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Templates() {
  const router = useRouter();
  const [currentTemplate, setCurrentTemplate] = useState("");

  const changeTemplate = async (templateId) => {
    const res = await fetch("/api/template", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        templateId,
      }),
    });

    const data = await res.json();

    if (res.ok) {
    toast.success("Template Updated Successfully 🚀");

setCurrentTemplate(templateId);

router.refresh();

setTimeout(() => {
  router.push("/dashboard");
}, 300);
    } else {
     toast.error(data.message);
    }
  };
  useEffect(() => {
    const getCurrentTemplate = async () => {
      const res = await fetch("/api/user/profile");

      const data = await res.json();

      if (data.user) {
        setCurrentTemplate(data.user.templateId);
      }
    };

    getCurrentTemplate();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-black mb-2">
        Choose Portfolio Template 🎨
      </h1>

      <p className="text-gray-600 mb-10">
        Select the design you want for your public portfolio.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Minimal */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="h-52 rounded-xl bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
            <span className="text-gray-500 font-semibold">Minimal Preview</span>
          </div>

          <h2 className="text-2xl font-bold mt-5 text-black">Minimal</h2>

          <p className="text-gray-600 mt-2">
            Clean and simple developer portfolio.
          </p>

          {currentTemplate === "minimal" ? (
            <button
              disabled
              className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl cursor-not-allowed"
            >
              ✔ Currently Selected
            </button>
          ) : (
            <button
              onClick={() => changeTemplate("minimal")}
              className="mt-5 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            >
              Use Template
            </button>
          )}
        </div>

        {/* Modern */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="h-52 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
            <span className="text-blue-600 font-semibold">Modern Preview</span>
          </div>

          <h2 className="text-2xl font-bold mt-5 text-black">Modern</h2>

          <p className="text-gray-600 mt-2">
            Professional layout with modern cards.
          </p>

         {currentTemplate === "modern" ? (
  <button
    disabled
    className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl cursor-not-allowed"
  >
    ✔ Currently Selected
  </button>
) : (
  <button
    onClick={() => changeTemplate("modern")}
    className="mt-5 w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
  >
    Use Template
  </button>
)}
        </div>

        {/* Gradient */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          <div className="h-52 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
            <span className="text-white font-semibold">Gradient Preview</span>
          </div>

          <h2 className="text-2xl font-bold mt-5 text-black">Gradient</h2>

          <p className="text-gray-600 mt-2">
            Colorful portfolio with gradient sections.
          </p>
         {currentTemplate === "gradient" ? (
  <button
    disabled
    className="mt-5 w-full bg-green-600 text-white py-3 rounded-xl cursor-not-allowed"
  >
    ✔ Currently Selected
  </button>
) : (
  <button
    onClick={() => changeTemplate("gradient")}
    className="mt-5 w-full bg-purple-600 text-white py-3 rounded-xl hover:bg-purple-700 transition"
  >
    Use Template
  </button>
)}
        </div>
      </div>
    </div>
  );
}
