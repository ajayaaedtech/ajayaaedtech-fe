"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { loginSuccess } from "../../redux/slice/authSlice";
import { API } from "../Api";
import wabinar from "./images/Webinar.gif";

export default function AuthForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [mode, setMode] = useState("login");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    courseType: "",
    message: "",
  });

  const nameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
    if (mode === "register" && step === 1) nameRef.current?.focus();
    if (mode === "login") emailRef.current?.focus();
  }, [mode, step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validPhone = (p) => /^[0-9]{10}$/.test(p);
  const validEmail = (e) => /\S+@\S+\.\S+/.test(e);

  const validateStep = (s) => {
    if (s === 1) return form.name.trim().length >= 2 && validPhone(form.phone);
    if (s === 2) return validEmail(form.email) && form.courseType.trim().length > 0;
    if (s === 3) return true;
    return false;
  };

  const goNext = () => {
    if (validateStep(step)) {
      setStep((p) => Math.min(3, p + 1));
    } else {
      toast.error("Please complete required fields correctly.", { position: "top-center" });
    }
  };

  const goBack = () => {
    setStep((p) => Math.max(1, p - 1));
  };

  const resetForm = () => {
    setForm({ name: "", phone: "", email: "", password: "", courseType: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);

    try {
      if (mode === "login") {
        const res = await fetch(API.AUTH.LOGIN, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: form.email, password: form.password }),
        });

        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Invalid server response.");
        }

        if (!res.ok) throw new Error(data.message || "Login failed");

        const expiresAt = Date.now() + 4 * 60 * 60 * 1000;
        dispatch(loginSuccess({ user: data.user, token: data.token, expiresAt }));
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("expiresAt", expiresAt.toString());
        document.cookie = `token=${data.token}; path=/; max-age=${4*60 * 60}; secure; samesite=lax`;

        toast.success("Loging in — redirecting... ", { position: "bottom-center", autoClose: 1800 });
        setTimeout(() => router.push("/dashboard"), 1200);
      } else {
        if (step < 3) {
          goNext();
          return;
        }

        if (!validateStep(1) || !validateStep(2)) {
          toast.error("Please fill all mandatory fields correctly.", { position: "top-center" });
          setLoading(false);
          return;
        }

        const payload = {
          name: form.name,
          phone: form.phone,
          email: form.email,
          courseType: form.courseType,
          message: form.message,
        };

        const res = await fetch(API.CALLBACKREQUEST.callback, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        const text = await res.text();
        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Invalid server response.");
        }

        if (!res.ok) throw new Error(data.message || "Request failed.");

        toast.success("Callback requested. Our team will contact you soon.", { position: "top-center" });
        resetForm();
        setMode("login");
        setStep(1);
      }
    } catch (err) {
      toast.error(err.message || "An error occurred", { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  const fade = { 
    hidden: { opacity: 0, y: 20 }, 
    enter: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }, 
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } } 
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-3 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="w-full max-w-5xl mx-auto sm:mt-0 mt-10">
        {/* Main Container */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Mobile: Form First, Then Hero Section */}
          <div className="flex flex-col lg:grid lg:grid-cols-12">
            {/* Right Panel - Form (Mobile First) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="h-full flex flex-col justify-center p-4 sm:p-6 lg:p-8 ">
                <div className="w-full mx-auto">
                  {/* Mode Toggle */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3"
                  >
                    <div>
                      <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                        {mode === "login" ? "Welcome Back" : "Start Your Journey"}
                      </h1>
                      <p className="text-gray-600 mt-1 text-xs sm:text-sm lg:text-base">
                        {mode === "login" 
                          ? "Continue your learning journey with us" 
                          : "Get personalized guidance from our experts"
                        }
                      </p>
                    </div>

                    <div className="flex gap-1  p-1 bg-blue-50 rounded-xl">
                      {[
                        { key: "login", label: "Sign In" },
                        { key: "register", label: "Get Callback" }
                      ].map((item) => (
                        <button
                          key={item.key}
                          onClick={() => { 
                            setMode(item.key); 
                            setStep(1); 
                            resetForm(); 
                          }}
                          className={`px-3 py-2 rounded-lg  font-semibold text-md transition-all duration-300 ${
                            mode === item.key
                              ? "bg-white text-blue-600 shadow-sm"
                              : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Form Container */}
                  <div className="bg-white rounded-xl p-4 sm:p-6">
                    <AnimatePresence mode="wait">
                      {mode === "login" ? (
                        <motion.form
                          key="login"
                          initial="hidden"
                          animate="enter"
                          exit="exit"
                          variants={fade}
                          onSubmit={handleSubmit}
                          className="space-y-4 sm:space-y-6"
                        >
                          <motion.div variants={fade}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                              ref={emailRef}
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              type="email"
                              required
                              placeholder="Enter your email"
                              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                            />
                          </motion.div>

                          <motion.div variants={fade}>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <input
                              name="password"
                              value={form.password}
                              onChange={handleChange}
                              type="password"
                              required
                              placeholder="Enter your password"
                              className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                            />
                          </motion.div>

                          <div className="flex items-center justify-between text-xs sm:text-sm">
                            <label className="inline-flex items-center gap-2 text-gray-600">
                              <input type="checkbox" className="rounded border-gray-300 text-blue-500 focus:ring-blue-500 w-3 h-3 sm:w-4 sm:h-4" />
                              Remember me
                            </label>
                            {/* <button type="button" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-xs sm:text-sm">
                              Forgot password?
                            </button> */}
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={loading}
                            className="w-full py-2.5 sm:py-3 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                          >
                            {loading ? (
                              <div className="flex items-center justify-center gap-2">
                                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Signing in...
                              </div>
                            ) : (
                              "Sign In to Dashboard"
                            )}
                          </motion.button>

                          <div className="text-center text-gray-600 text-xs sm:text-sm">
                            New to Ajayaa?{" "}
                            <button
                              type="button"
                              onClick={() => { 
                                setMode("register"); 
                                setStep(1); 
                                resetForm(); 
                              }}
                              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                            >
                              Request a Callback
                            </button>
                          </div>
                        </motion.form>
                      ) : (
                        <motion.div
                          key={`register-${step}`}
                          initial="hidden"
                          animate="enter"
                          exit="exit"
                          variants={fade}
                        >
                          {/* Progress Bar */}
                          <div className="mb-4 sm:mb-6">
                            <div className="flex items-center justify-between mb-2 sm:mb-3">
                              {[1, 2, 3].map((s) => (
                                <div key={s} className="flex items-center">
                                  <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                    s <= step 
                                      ? "bg-blue-600 text-white"
                                      : "bg-gray-100 text-gray-400"
                                  }`}>
                                    {s}
                                  </div>
                                  {s < 3 && (
                                    <div className={`w-4 sm:w-8 lg:w-12 h-1 mx-1 sm:mx-2 transition-all duration-500 ${
                                      s < step ? "bg-blue-600" : "bg-gray-200"
                                    }`} />
                                  )}
                                </div>
                              ))}
                            </div>
                            <div className="text-xs text-gray-500 text-center">
                              Step {step} of 3 • {["Basic Info", "Course Details", "Review"][step - 1]}
                            </div>
                          </div>

                          <form
                            onSubmit={handleSubmit}
                            className="space-y-3 sm:space-y-4"
                          >
                            <AnimatePresence mode="wait">
                              {step === 1 && (
                                <motion.div
                                  key="step-1"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  className="space-y-3 sm:space-y-4"
                                >
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                                    <input
                                      ref={nameRef}
                                      name="name"
                                      value={form.name}
                                      onChange={handleChange}
                                      required
                                      placeholder="Enter your full name"
                                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                    <input
                                      name="phone"
                                      value={form.phone}
                                      onChange={handleChange}
                                      required
                                      placeholder="Enter 10-digit mobile number"
                                      inputMode="tel"
                                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                                    />
                                    <p className="text-xs text-gray-500 mt-1">We'll use this to contact you</p>
                                  </div>
                                </motion.div>
                              )}

                              {step === 2 && (
                                <motion.div
                                  key="step-2"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  className="space-y-3 sm:space-y-4"
                                >
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                      name="email"
                                      value={form.email}
                                      onChange={handleChange}
                                      type="email"
                                      required
                                      placeholder="Enter your email"
                                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
                                    />
                                  </div>

                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Course Interest</label>
                                    <select
                                      name="courseType"
                                      value={form.courseType}
                                      onChange={handleChange}
                                      required
                                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-white border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 appearance-none text-sm sm:text-base"
                                    >
                                      <option value="">Select a course</option>
                                      <option value="MERN Full Stack">MERN Full Stack</option>
                                      <option value="Digital Marketing">Digital Marketing</option>
                                      <option value="UI/UX Design">UI/UX Design</option>
                                      <option value="Flutter Mobile Dev">Flutter Mobile Dev</option>
                                    </select>
                                  </div>
                                </motion.div>
                              )}

                              {step === 3 && (
                                <motion.div
                                  key="step-3"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -20 }}
                                  className="space-y-3 sm:space-y-4"
                                >
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Message (Optional)</label>
                                    <textarea
                                      name="message"
                                      rows={2}
                                      value={form.message}
                                      onChange={handleChange}
                                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-sm sm:text-base"
                                      placeholder="Tell us about your goals and expectations..."
                                    />
                                  </div>

                                  <div className="p-3 sm:p-4 rounded-lg bg-blue-50 border border-blue-200">
                                    <h4 className="text-sm sm:text-base font-semibold text-gray-800 mb-2 sm:mb-3">Review Your Information</h4>
                                    <div className="grid grid-cols-1 gap-1 sm:gap-2 text-xs sm:text-sm">
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Name:</span>
                                        <span className="text-gray-800 font-medium">{form.name}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Phone:</span>
                                        <span className="text-gray-800 font-medium">{form.phone}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Email:</span>
                                        <span className="text-gray-800 font-medium">{form.email}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Course:</span>
                                        <span className="text-gray-800 font-medium">{form.courseType}</span>
                                      </div>
                                      <div className="flex justify-between">
                                        <span className="text-gray-600">Message:</span>
                                        <span className="text-gray-800 font-medium max-w-[100px] sm:max-w-[120px] truncate">{form.message || "Not provided"}</span>
                                      </div>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="flex items-center justify-between pt-3 sm:pt-4 gap-2">
                              <button
                                type="button"
                                onClick={() => {
                                  if (step === 1) {
                                    setMode("login");
                                    setStep(1);
                                  } else {
                                    goBack();
                                  }
                                }}
                                className="px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition-all duration-300 text-xs sm:text-sm"
                              >
                                {step === 1 ? "Back to Login" : "Previous"}
                              </button>

                              <div className="flex items-center gap-2">
                                {step < 3 ? (
                                  <button
                                    type="button"
                                    onClick={goNext}
                                    className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 text-xs sm:text-sm"
                                  >
                                    Continue
                                  </button>
                                ) : (
                                  <button
                                    type="submit"
                                    disabled={loading}
                                    className="px-4 py-2 sm:px-6 sm:py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-xs sm:text-sm"
                                  >
                                    {loading ? (
                                      <div className="flex items-center gap-1 sm:gap-2">
                                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Submitting...
                                      </div>
                                    ) : (
                                      "Request Callback"
                                    )}
                                  </button>
                                )}
                              </div>
                            </div>
                          </form>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-3 sm:mt-4 text-center text-xs text-gray-600"
                  >
                    By continuing, you agree to our{" "}
                   
                   
                    <span className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700 transition-colors duration-200"><a href="/privacy-policy">Privacy Policy</a></span>
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Left Panel - Hero Section (Mobile Second) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="lg:col-span-5 order-2 lg:order-1 lg:border-r lg:border-gray-200"
            >
              <div className="h-full flex flex-col justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 sm:gap-3 mb-4"
                  >
                    <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full" />
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                      Ajayaa EdTech
                    </h2>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-600 text-sm sm:text-base leading-relaxed"
                  >
                    Where timeless wisdom meets cutting-edge technology.
                  </motion.p>
                </div>

                {/* Center Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex justify-center my-4 sm:my-6"
                >
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-2xl" />
                    <Image 
                      src={wabinar} 
                      alt="Premium Learning Experience" 
                      fill 
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-2 sm:gap-3 text-center mt-4"
                >
                  {[
                    { icon: "🎯", text: "Expert Mentors" },
                    { icon: "💼", text: "Career Support" },
                    { icon: "🚀", text: "Live Projects" },
                    { icon: "⚡", text: "Flexible Learning" }
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-2 text-gray-600 group"
                    >
                      <span className="text-lg sm:text-xl group-hover:scale-110 transition-transform duration-200">
                        {feature.icon}
                      </span>
                      <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}