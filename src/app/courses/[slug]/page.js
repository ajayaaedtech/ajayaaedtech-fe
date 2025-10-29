import { courses } from "../data";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

export default function CourseDetail({ params }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course)
    return <div className="text-center py-20 text-gray-500">Course not found.</div>;

  return (
    <main className="max-w-5xl mx-auto px-5 sm:px-8 py-10 sm:py-16">
      {/* Back Link */}
      <Link
        href="/courses"
        className="flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Courses
      </Link>

      {/* Course Header */}
      <section className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
          {course.name}
        </h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-gray-600 text-sm justify-center sm:justify-start">
          <div className="flex items-center gap-1 font-medium text-blue-600">
            <Clock className="w-4 h-4" /> {course.duration}
          </div>
          {course.featured && (
            <span className="mt-1 sm:mt-0 bg-blue-600 text-white text-xs font-semibold px-3 py-[4px] rounded-full">
              ★ Featured
            </span>
          )}
        </div>
      </section>

      {/* Overview */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-blue-700 mb-3">Overview</h2>
        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          {course.overview}
        </p>
      </section>

      {/* Objectives */}
      {course.objectives?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Objectives
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            {course.objectives.map((o, i) => (
              <li
                key={i}
                className={o.important ? "font-medium text-blue-700" : ""}
              >
                {typeof o === "string" ? o : o.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Who Can Attend */}
      {course.whoCanAttend?.length > 0 && (
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-blue-700 mb-3">
            Who Can Attend
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-base">
            {course.whoCanAttend.map((w, i) => (
              <li
                key={i}
                className={w.important ? "font-medium text-blue-700" : ""}
              >
                {typeof w === "string" ? w : w.text}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Course Content */}
      {course.content?.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-blue-700 mb-4">
            Course Content
          </h2>
          <div className="space-y-6">
            {course.content.map((section, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border-l-4 shadow-sm ${
                  section.important
                    ? "border-blue-600 bg-blue-50/40"
                    : "border-gray-300 bg-gray-50"
                }`}
              >
                <h3 className="font-semibold text-gray-900 mb-2">
                  {section.title}
                </h3>
                <ul className="list-disc list-inside text-gray-700 ml-2 space-y-1 text-sm sm:text-base">
                  {section.topics.map((t, j) => (
                    <li key={j}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
