"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slice/authSlice";
import { API } from "../Api";
import wabinar from "./images/Webinar.gif";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isLogin ? API.AUTH.LOGIN : API.AUTH.REGISTER;

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isLogin ? { email: form.email, password: form.password } : form),
      });

      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("Invalid response from server. Please check API route.");
      }

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      const expiresAt = Date.now() + 60 * 60 * 1000;
      dispatch(loginSuccess({ user: data.user, token: data.token, expiresAt }));

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("expiresAt", expiresAt.toString());
      document.cookie = `token=${data.token}; path=/; max-age=${60 * 60}; secure; samesite=lax`;

      toast.success(
        isLogin ? "Login Successful 🎉 Redirecting to dashboard..." : "Account created successfully 🚀",
        { position: "top-right", autoClose: 3000 }
      );

      setTimeout(() => router.push("/dashboard"), 2000);
    } catch (err) {
      toast.error(err.message || "An error occurred", {
        position: "top-right",
        autoClose: 4000,
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 justify-center items-center px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full">
        {/* Left Section */}
        <div className="hidden md:flex flex-1 flex-col justify-center items-center bg-white text-black p-10 relative space-y-6">
          <h2 className="text-2xl font-bold mb-4 tracking-wide">Ajayaa EdTech</h2>
          <Image src={wabinar} alt="Education Concept" width={300} height={300} className="rounded-xl shadow-lg" />
          <p className="mt-4 text-center text-sm max-w-xs opacity-90">
            Empower your learning journey with <span className="font-semibold">Ajayaa EdTech</span>.
            Unlock your potential with modern tools and skills.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 p-10 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {isLogin ? "Welcome Back 👋" : "Create Your Account"}
            </h1>
            <p className="text-gray-500 text-sm">
              {isLogin ? "Login to continue your journey" : "Join us and start your growth"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                name="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                type="password"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg shadow-lg font-semibold transition-all duration-200"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-indigo-600 font-medium hover:underline ml-2"
            >
              {isLogin ? "Register" : "Login"}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
