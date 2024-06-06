"use client";

import { useState, ChangeEvent } from "react";

export default function Home() {
  const [apiKey, setApiKey] = useState<string>("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setApiKey(event.target.value);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col justify-between gap-4">
        <button
          className={`border p-2 rounded-md text-white ${
            apiKey
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!apiKey}
        >
          Login with Google
        </button>
        <input
          className="border border-black rounded p-2"
          type="text"
          placeholder="Enter OpenAI API Key"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
