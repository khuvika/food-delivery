"use client";
import React, { useState } from "react";

export default function Left() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-md p-8">
      <h2 className="text-2xl font-semibold mb-4">Create a strong password</h2>
      <p className="text-sm text-gray-500 mb-6">
        Create a strong password with letters, numbers.
      </p>

      <form className="w-full space-y-4">
        <input
          id="email"
          type="email"
          placeholder="Password"
          className="w-full border border-gray-300 rounded px-4 py-2"
        />
        <input
          type="password"
          placeholder="Confirm"
          className={`w-full border border-gray-300 rounded px-4 py-2
            `}
        />

        {/* <div className="text-left text-sm text-black cursor-pointer hover:underline">
          Show password
        </div> */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="exampleCheckbox"
            checked={isChecked}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="exampleCheckbox" className="text-gray-900">
            Show password
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Let’s Go
        </button>
      </form>

      <div className="mt-6 text-sm">
        Already have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Log in
        </a>
      </div>
    </div>
  );
}
