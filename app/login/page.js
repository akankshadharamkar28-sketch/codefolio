"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    const res = await fetch("/api/auth/login", {

      method:"POST",

      headers:{
        "Content-Type":"application/json"
      },

      body: JSON.stringify(formData)

    });


    const data = await res.json();


  if(res.ok){

  setMessage("Login successful 🚀");

  setTimeout(() => {
    router.replace("/dashboard");
  }, 1000);

}
    else{

      setMessage(data.message);

    }

  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-[#172554] px-4 sm:px-6 py-6">

      <form
        onSubmit={handleSubmit}
       className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8 lg:p-10 text-black"
      >

      <div className="text-center mb-8">

  <div className="text-4xl sm:text-5xl mb-3">🚀</div>

  <h1 className="text-3xl sm:text-4xl font-extrabold">
    Welcome Back
  </h1>

  <p className="text-gray-500 text-sm sm:text-base mt-2">
    Login to manage your CodeFolio portfolio
  </p>

</div>


        <input

          name="email"

          type="email"

          placeholder="Email"

          className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 mb-5 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
          onChange={handleChange}

        />


        <input

          name="password"

          type="password"

          placeholder="Password"

         className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 sm:px-5 py-3 sm:py-4 mb-6 outline-none transition-all duration-300 focus:bg-white focus:border-violet-500 focus:ring-4 focus:ring-violet-200"
          onChange={handleChange}

        />


        <button

        className="w-full py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 text-white font-bold text-base sm:text-lg shadow-xl hover:scale-[1.02] hover:shadow-cyan-500/30 transition-all duration-300"
        >

          Login

        </button>


        <p className={`text-center mt-6 font-medium ${
  message.includes("successful")
    ? "text-green-600"
    : "text-red-500"
}`}>
  {message}
</p>

<p className="text-center text-gray-500 mt-6">
  Don't have an account?
</p>

<button
  type="button"
  onClick={() => router.push("/register")}
 className="w-full mt-3 py-3 rounded-2xl text-sm sm:text-base border border-violet-500 text-violet-600 font-semibold hover:bg-violet-50 transition"
>
  Create Account
</button>

      </form>

    </div>

  );

}