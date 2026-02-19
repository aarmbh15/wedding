import React, { useState } from "react";

// Single-file React component for a clean login page using Tailwind CSS
// Drop this file into a Vite + React project (e.g. src/components/LoginPage.jsx)
// Tailwind must be configured in the project for styling to work.

export default function LoginPage({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return false;
    }
    // simple email regex (not exhaustive)
    const re = /^\S+@\S+\.\S+$/;
    if (!re.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setError("");

    try {
      // Example: replace with real API call
      // const res = await fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, password }) })
      // const data = await res.json()

      // Mock delay to simulate network
      await new Promise((r) => setTimeout(r, 700));

      // Mock success condition
      if (email === "user@example.com" && password === "password") {
        const payload = { email };
        // call optional onSubmit prop (e.g. to set auth state / redirect)
        if (onSubmit) onSubmit(payload);
        // otherwise just console log
        console.log("Logged in:", payload);
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <header className="text-center mb-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-400 flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 01-8 0m8 0V8a4 4 0 00-8 0v4m8 0H8" />
            </svg>
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-gray-800">Welcome back</h1>
          <p className="text-sm text-gray-500">Sign in to continue to your account</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              autoComplete="email"
            />
          </label>

          <label className="block relative">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your password"
              className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 pr-10"
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-9 transform -translate-y-1/2 text-sm text-gray-500 hover:text-gray-700"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </label>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded" />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-indigo-600 hover:underline">Forgot password?</a>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 text-white font-medium shadow-md hover:opacity-95 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <footer className="mt-6 text-center text-sm text-gray-600">
          <p>
            Don’t have an account? <a href="#" className="text-indigo-600 font-semibold hover:underline">Sign up</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
