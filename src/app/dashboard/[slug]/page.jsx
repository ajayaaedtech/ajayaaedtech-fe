"use client";

import React, { useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseDetails } from "../../../redux/slice/courseSlice";
import DetailOnlinePage from "../components/DetailOnlinePage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const { slug } = useParams();
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // 👈 capture ?id=C002
  const dispatch = useDispatch();
  const router = useRouter();

  const { selectedCourse, loading, error } = useSelector((s) => s.courses);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseDetails(id)); // 👈 use courseId, not slug
    } else {
      toast.error("Course ID missing in URL");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Loading {slug}…
      </div>
    );

  if (!selectedCourse)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-400">
        Course not found
      </div>
    );

  return (
    <div className="">
      <div className="">
        <DetailOnlinePage
          course={selectedCourse}
          onBack={() => router.push("/dashboard")}
        />
      </div>
      <ToastContainer />
    </div>
  );
}
