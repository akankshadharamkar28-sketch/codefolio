"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 text-center max-w-lg">

        <h1 className="text-5xl font-black text-red-600">
          Oops!
        </h1>

        <h2 className="text-2xl font-bold mt-4">
          Something went wrong
        </h2>

        <p className="text-gray-500 mt-4">
          An unexpected error occurred.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Try Again
        </button>

      </div>
    </div>
  );
}