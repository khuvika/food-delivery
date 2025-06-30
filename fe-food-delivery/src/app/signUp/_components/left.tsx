"use client";
import React, { useState } from "react";

export default function Left() {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md p-8">
      <h2 className="text-2xl font-semibold mb-4">Create your account</h2>
      <p className="text-sm text-gray-500 mb-6">
        Sign up to explore your favorite dishes
      </p>

      <form className="w-full space-y-4">
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        {/* <input
          type="password"
          placeholder="Password"
          className={`w-full border border-gray-300 rounded px-4 py-2
            `}
        /> */}

        {/* <div className="text-right text-sm text-blue-500 cursor-pointer hover:underline">
          Forgot password?
        </div> */}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Let’s Go
        </button>
      </form>

      <div className="mt-6 text-sm">
        Already have an account?{" "}
        <a href="/login" className="text-blue-500 hover:underline">
          Log in
        </a>
      </div>
    </div>
  );
}
