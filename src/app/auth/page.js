"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import Loader from "../components/Loader";
import { GiSandsOfTime } from "react-icons/gi";


const AuthForm = dynamic(() => import("../components/AuthForm"), {
  ssr: true,
  loading: () => null,
});

export default function DashboardPage() {
  const router = useRouter();
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    try {
      const token = localStorage.getItem("token");
      const expires = localStorage.getItem("expiresAt");

      if (!token || !expires || Date.now() > Number(expires)) {
        localStorage.clear();
        setStatus("unauthorized");
        return;
      }

      setStatus("ok");
    } catch (err) {
      console.error("Auth check failed:", err);
      setStatus("unauthorized");
    }
  }, []);

  if (status === "checking") {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-gray-700">
        <p className="mt-6 text-lg font-medium">Verifying session...</p>

        <Loader
          title="Hold on..."
          message="Just a breath… your session is aligning."
          icon={<GiSandsOfTime className="animate-spin text-white" size={40} />}
        />
      </div>
    );
  }

  if (status === "unauthorized") {
    return <AuthForm />;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <AuthForm />
    </div>
  );
}
