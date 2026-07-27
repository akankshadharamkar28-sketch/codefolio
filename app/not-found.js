"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="text-center">

        <h1 className="text-8xl font-black text-black">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-5">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-black text-white px-8 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Go Homes
        </Link>

      </div>
    </div>
  );
}