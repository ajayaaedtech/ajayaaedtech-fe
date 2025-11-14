"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AuthForm from "../components/AuthForm"; // ✅ your existing login component
import Loader from "../components/Loader";
import { GiSandsOfTime } from "react-icons/gi";

export default function DashboardPage() {
  const router = useRouter();
  const [status, setStatus] = useState("checking"); // "checking" | "ok" | "unauthorized"

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const expires = localStorage.getItem("expiresAt");

      // No token or expired one
      if (!token || !expires || Date.now() > Number(expires)) {
        localStorage.clear();
        setStatus("unauthorized");
        return;
      }

      // Token exists & valid
      setStatus("ok");
    } catch (err) {
      console.error("Auth check failed:", err);
      setStatus("unauthorized");
    }
  }, []);

  // Simple loading placeholder while verifying
  if (status === "checking") {
    return (
      <div className="h-screen flex flex-col items-center justify-center relative text-gray-700">

        {/* Background blur overlay */}
        {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-md z-0"></div> */}

        {/* Rotating image */}
        {/* <img
          src="/spinner.png" // replace with your actual image path
          alt="Loading"
          className="h-20 w-20 animate-spin z-10"
        /> */}



        {/* Subtext */}
        <p className="mt-6 text-lg font-medium z-10">
          Verifying session...
        </p>

        {/* Loader overlay */}

        <Loader
          title="Hold on..."
          message="Just a breath… your session is aligning."

          icon={<GiSandsOfTime className="animate-spin text-white" size={40} />}
        />

      </div>
    );
  }

  // ❌ No token → show Auth page directly
  if (status === "unauthorized") {
    return <AuthForm />;
  }

  // ✅ Token valid → show dashboard content
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <AuthForm />
    </div>
  );
}
