"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {Palette, FolderGit2, Rocket, FileText,  Link2, Sparkles,} from "lucide-react";

export default function Home() {
  const features = [
  {
    icon: Palette,
    title: "Beautiful Templates",
    description:
      "Choose from multiple premium portfolio templates with one click.",
  },
  {
    icon: FolderGit2,
    title: "Project Showcase",
    description:
      "Add unlimited projects with GitHub links, live demos and screenshots.",
  },
  {
    icon: Rocket,
    title: "One Click Publish",
    description:
      "Publish instantly and share your portfolio using one public link.",
  },
  {
    icon: FileText,
    title: "Resume Support",
    description:
      "Upload your resume and let recruiters download it anytime.",
  },
  {
    icon: Link2,
    title: "Social Integration",
    description:
      "Connect GitHub, LinkedIn, Twitter and other professional profiles.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "Responsive UI, animations, dark mode and blazing fast performance.",
    premium: true,
  },
];
const [selectedTemplate, setSelectedTemplate] = useState(null);
const templates = [
  {
    title: "Minimal",
    image: "/projects/minimal.png",
    color: "bg-black",
    description:
      "Clean and elegant layout for developers who love simplicity.",
  },
  {
    title: "Modern",
    image: "/projects/modern.png",
    color: "bg-blue-600",
    description:
      "Stylish cards, premium spacing and modern professional look.",
  },
  {
    title: "Gradient",
    image: "/projects/gradient.png",
    color: "bg-gradient-to-r from-purple-600 to-pink-500",
    description:
      "Beautiful colorful UI with vibrant gradients and premium feel.",
  },
];
useEffect(() => {

  const handleKeyDown = (e) => {

    if (e.key === "Escape") {

      setSelectedTemplate(null);

    }

  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {

    window.removeEventListener("keydown", handleKeyDown);

  };

}, []);
  return (
  <main className="min-h-screen relative overflow-hidden bg-[#fbfbfd] text-black">
<div className="absolute inset-0 -z-10">
  <div className="absolute top-0 left-0 w-[520px] h-[520px] bg-blue-200 rounded-full blur-[140px] opacity-35"></div>

<div className="absolute top-[900px] right-0 w-[500px] h-[500px] bg-violet-200 rounded-full blur-[150px] opacity-30"></div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-pink-100 rounded-full blur-[170px] opacity-20"></div>
</div>
      {/* Navbar */}

      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
         <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            CodeFolio<span className="text-blue-600">.</span>
          </Link>

          <div className="hidden md:flex items-center gap-10 font-medium">
            <a href="#features" className="hover:text-blue-600 transition">
              Features
            </a>

            <a href="#templates" className="hover:text-blue-600 transition">
              Templates
            </a>

      
          </div>

        <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/login"
              className="hidden sm:block font-medium hover:text-blue-600 transition duration-300">
              Login
            </Link>

            <Link
              href="/dashboard"
             className="bg-white/70 backdrop-blur-xl text-black px-4 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-sm sm:text-base hover:-translate-y-1 hover:scale-105 transition"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}

      <section className="relative overflow-hidden">
        {/* Background */}

        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-blue-200 rounded-full blur-[180px] -top-40 -left-40 opacity-60"></div>

          <div className="absolute w-[500px] h-[500px] bg-purple-200 rounded-full blur-[180px] bottom-0 right-0 opacity-60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-12 lg:pb-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}

         <div className="relative flex flex-col justify-center max-w-xl">

  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-white/70 backdrop-blur-xl px-5 py-2 shadow-lg">
    <span>🚀</span>
    <span className="font-semibold text-blue-700">
      Trusted by Developers Worldwide
    </span>
  </div>

 <h1 className="mt-8 text-2xl sm:text-3xl lg:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
    Build Your

    <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
      Dream Portfolio
    </span>

    <span className="block">
      in Minutes.
    </span>
  </h1>

  <p className="mt-6 text-base sm:text-lg lg:text-xl leading-8 text-gray-600 max-w-xl">
    Build a beautiful portfolio website in minutes.
    Showcase your projects, skills, resume and social links
    with modern recruiter-friendly templates.
  </p>

 <div className="mt-8 flex flex-col sm:flex-row gap-4">

    <Link
      href="/dashboard"
     className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white font-bold shadow-xl hover:-translate-y-1 transition"
    >
      Create My Portfolio →
    </Link>

    <a
      href="#templates"
     className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg font-semibold hover:-translate-y-1 transition"
    >
      Browse Templates
    </a>

  </div>

  <div className="grid grid-cols-3 gap-4 mt-10 text-center">

    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-600">10K+</h2>
      <p className="text-gray-500 mt-2">Developers</p>
    </div>

    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-violet-600">500+</h2>
      <p className="text-gray-500 mt-2">Portfolios</p>
    </div>

    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-green-600">99%</h2>
      <p className="text-gray-500 mt-2">Recruiter Friendly</p>
    </div>

  </div>

</div>

         <div className="relative h-[420px] sm:h-[520px] lg:h-[650px] flex items-center justify-center">
            {/* Floating Card 1 */}

         <div className="hidden lg:block absolute top-12 -left-8 z-30 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl px-5 py-4 border border-white/50">
              <p className="text-xs text-gray-500">Recruiter</p>

              <p className="font-bold text-green-600">Profile Viewed 👀</p>
            </div>

            {/* Floating Card 2 */}

<div className="hidden lg:block absolute top-8 right-0 z-30 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl px-5 py-4 border border-white/50">
              <p className="text-xs text-gray-500">GitHub</p>

              <p className="font-bold text-blue-600">Connected ✓</p>
            </div>

            {/* Floating Card 3 */}

<div className="hidden lg:block absolute bottom-20 -left-10 z-30 bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl px-5 py-4 border border-white/50">
              <p className="text-xs text-gray-500">Resume</p>

              <p className="font-bold text-purple-600">Resume Ready 📄</p>
            </div>

            {/* Floating Card 4 */}

         <div className="hidden lg:block absolute bottom-2 right-2 z-30 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 text-white rounded-2xl shadow-[0_20px_60px_rgba(99,102,241,.45)] px-6 py-4">
              <p className="text-xs opacity-80">Status</p>

              <p className="font-bold">Portfolio Live 🚀</p>
            </div>

            <div className="relative w-[280px] sm:w-full max-w-[500px] lg:max-w-[620px] h-[320px] sm:h-[460px] lg:h-[560px] mx-auto z-10 transition duration-500 hover:-translate-y-2">

  {/* Glow */}
  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-pink-500/20 blur-3xl scale-110"></div>

  {/* Dashboard Card */}
  <div className="relative h-full rounded-[36px] bg-white/50 backdrop-blur-xl border border-white/40 shadow-2xl p-6">

    <div className="rounded-[28px] h-full bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">

      <div className="w-full h-full p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                
                  {/* Top */}

                  <div className="flex items-center justify-between">
                    <div className="relative animate-fade-in">
                      <p className="text-gray-400 text-sm">
                        Dashboard Akanksha
                      </p>

                      <h2 className="text-2xl font-bold text-white">
                        Akanksha
                      </h2>
                    </div>

                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
                      A
                    </div>
                  </div>

                  {/* Cards */}

                  <div className="space-y-4">
                    <div className="bg-slate-800 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">Projects</p>

                      <h3 className="text-3xl font-bold text-white mt-2">12</h3>
                    </div>

                    <div className="bg-slate-800 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">Portfolio Views</p>

                      <h3 className="text-3xl font-bold text-cyan-400 mt-2">
                        4.8K
                      </h3>
                    </div>

                    <div className="bg-slate-800 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">Recruiter Score</p>

                      <div className="mt-3 h-3 rounded-full bg-slate-700 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-400 to-blue-500 w-[90%] h-full rounded-full"></div>
                      </div>

                      <p className="text-green-400 mt-2 font-semibold">90%</p>
                    </div>
                  </div>

                  {/* Bottom */}

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-400">Status</p>

                      <p className="font-bold text-green-400">Live 🚀</p>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-400">Template</p>

                      <p className="font-bold text-blue-400">Modern</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-8">
    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
</div>

      {/* Features */}

      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
       <div className="text-center max-w-4xl mx-auto">

  <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold tracking-[3px] uppercase">

    ✨ Features

  </span>

 <h2 className="mt-6 text-3xl sm:text-4xl lg:text-6xl font-black leading-tight">

    Everything you need

    <span className="block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">

      to build your dream portfolio

    </span>

  </h2>

  <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-7 lg:leading-9 max-w-3xl mx-auto">

    Powerful tools made for developers.
    Build your portfolio, upload projects, connect GitHub,
    add resume, publish instantly and impress recruiters.

  </p>

</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-20">
          {/* Card */}

          {features.map((feature, index) => {

  const Icon = feature.icon;


  return (

    <div
      key={index}
     className={`group rounded-3xl p-6 lg:p-8 transition-all duration-500
      ${
        feature.premium
          ? "bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 text-white shadow-2xl hover:scale-105"
          : "bg-white/70 backdrop-blur-xl/70 backdrop-blur-xl border border-white shadow-lg hover:shadow-2xl hover:-translate-y-3"
      }`}
    >

      <div
        className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center
        ${
          feature.premium
            ? "bg-white/70 backdrop-blur-xl/20"
            : "bg-gradient-to-r from-blue-100 to-purple-100"
        }`}
      >

        <Icon
          size={30}
          className={
            feature.premium
              ? "text-white"
              : "text-blue-600"
          }
        />

      </div>

      <h3 className="text-xl lg:text-2xl font-bold mt-6 lg:mt-8">

        {feature.title}

      </h3>

      <p
       className={`mt-4 lg:mt-5 leading-7 lg:leading-8 ${
          feature.premium
            ? "text-blue-100"
            : "text-gray-600"
        }`}
      >

        {feature.description}

      </p>

    </div>

  );

})}
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-8">
    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
</div>
      {/* Templates Section */}

    <section
  id="templates"
 className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
>
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold tracking-[3px] uppercase">
            TEMPLATES
          </span>

         <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-3 leading-tight tracking-tight">
            Choose Your Portfolio Style
          </h2>

          <p className="text-gray-500 text-base sm:text-lg leading-7 lg:leading-8 mt-5 max-w-2xl mx-auto">
            Pick a template that matches your personality and showcase your work
            beautifully.
          </p>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12">
          {/* Minimal */}

        {templates.map((template, index) => (
  <div
    key={index}
    className="group bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
  >
    <div className="overflow-hidden">

      <img
        src={template.image}
        alt={template.title}
        className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-110 transition duration-700"
      />

    </div>

    <div className="p-5 lg:p-6">

      <h3 className="text-2xl lg:text-3xl font-bold">
        {template.title}
      </h3>

      <p className="text-gray-600 mt-3 leading-7">
        {template.description}
      </p>

     <button
  onClick={() => setSelectedTemplate(template)}
  className={`mt-6 w-full py-3 rounded-xl text-white font-semibold transition hover:scale-[1.02] ${template.color}`}
>
  Preview Template
</button>

    </div>

  </div>
))}
        </div>
      </section>
      {/* Template Preview Modal */}

{selectedTemplate && (

 <div
  onClick={() => setSelectedTemplate(null)}
 className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
>
   <div
  onClick={(e) => e.stopPropagation()}
  className="bg-white/70 backdrop-blur-xl rounded-[40px] w-full max-w-6xl overflow-hidden shadow-2xl relative"
>

      {/* Close */}

<button
  onClick={() => setSelectedTemplate(null)}
  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/90 flex items-center justify-center text-white hover:bg-red-500 hover:rotate-90 transition-all duration-300"
>
  ✕
</button>

      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Left */}

        <div className="bg-gray-100 p-4 sm:p-8 flex items-center justify-center">

          <img
  src={selectedTemplate.image}
  className="w-full h-full object-cover rounded-2xl shadow-2xl transition duration-500 hover:scale-105"
/>
        </div>

        {/* Right */}

        <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">

          <span className="text-sm uppercase tracking-[3px] text-blue-600 font-bold">

            Portfolio Template

          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-5">

            {selectedTemplate.title}

          </h2>
<p className="text-gray-500 text-base sm:text-lg lg:text-xl leading-7 lg:leading-9 mt-6">

  {selectedTemplate.description}

</p>

<div className="mt-10 space-y-5">

  <div className="flex items-center gap-3 text-base lg:text-lg">
    ✔ Fully Responsive
  </div>

  <div className="flex items-center gap-3 text-base lg:text-lg">
    ✔ ATS Friendly Layout
  </div>

  <div className="flex items-center gap-3 text-base lg:text-lg">
    ✔ GitHub Integration
  </div>

  <div className="flex items-center gap-3 text-base lg:text-lg">
    ✔ Resume Download
  </div>

  <div className="flex items-center gap-3 text-base lg:text-lg">
    ✔ Dark / Light Mode
  </div>

</div>

         <Link
  href="/dashboard"
  className={`mt-8 lg:mt-12 w-full flex justify-center items-center py-4 lg:py-5 rounded-2xl text-white text-lg lg:text-xl font-bold shadow-xl hover:scale-[1.03] transition-all duration-300 ${selectedTemplate.color}`}
>
  Use This Template 🚀
</Link>

        </div>

      </div>

    </div>

  </div>

)}
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
</div>
      {/* CTA */}

     <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="relative overflow-hidden rounded-[30px] lg:rounded-[40px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-center py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-10 shadow-2xl">
          <p className="uppercase tracking-[4px] font-semibold opacity-80">
            START TODAY
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-6 leading-tight">
            Build your dream portfolio
            <br />
            in just a few minutes.
          </h2>

          <p className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of developers showcasing their work with beautiful
            portfolio templates.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-5 mt-10 lg:mt-12">
            <Link
              href="/dashboard"
             className="w-full sm:w-auto bg-white/70 backdrop-blur-xl text-black px-8 py-4 rounded-2xl font-bold hover:-translate-y-1 hover:scale-105 transition"
            >
              Get Started Free
            </Link>

            <Link
              href="/login"
             className="w-full sm:w-auto border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white/70 backdrop-blur-xl hover:text-black transition"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
     <footer className="bg-[#09090b] text-white mt-10">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">

    {/* Left */}
    <div>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black">CodeFolio</h2>

      <p className="mt-5 text-gray-400 leading-7 max-w-sm">
        Build stunning developer portfolios, showcase your projects and impress recruiters.
      </p>
    </div>

    {/* Middle */}
    <div>
      <h3 className="font-bold text-xl mb-5">
        Quick Links
      </h3>

      <ul className="space-y-3 text-gray-400">
        <li><a href="#features" className="hover:text-blue-400">Features</a></li>
        <li><a href="#templates" className="hover:text-blue-400">Templates</a></li>
        <li><Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
      </ul>
    </div>

    {/* Right */}
    <div>
      <h3 className="font-bold text-xl mb-5">
        Ready to Build?
      </h3>

      <p className="text-gray-400 leading-7">
        Create your portfolio today and impress recruiters with a modern developer profile.
      </p>

      <Link
        href="/dashboard"
        className="inline-block mt-6 bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Start Free →
      </Link>
    </div>

  </div>

  <div className="border-t border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm text-center md:text-left">
      <p>© 2026 CodeFolio. All rights reserved.</p>

      <p className="mt-3 md:mt-0">
        Built with ❤️ using Next.js & Tailwind CSS
      </p>
    </div>
  </div>

</footer>
    </main>
  );
}
