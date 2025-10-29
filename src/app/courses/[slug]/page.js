import { courses } from "../data/courses";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CourseDetail({ params }) {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return <div className="text-center py-20">Course not found.</div>;

  return (
    <main className="max-w-5xl mx-auto py-12 px-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:underline"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Courses
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-4">{course.name}</h1>
      <p className="text-gray-600 mb-8">{course.overview}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Objectives</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {course.objectives.map((o, i) => (
            <li
              key={i}
              className={o.important ? "font-medium text-blue-700" : "text-gray-700"}
            >
              {o.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Who Can Attend</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {course.whoCanAttend.map((w, i) => (
            <li
              key={i}
              className={w.important ? "font-medium text-blue-700" : "text-gray-700"}
            >
              {w.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold text-blue-700 mb-2">Course Content</h2>
        {course.content.map((section, i) => (
          <div
            key={i}
            className={`mb-4 border-l-4 pl-3 ${
              section.important ? "border-blue-600" : "border-gray-300"
            }`}
          >
            <h3 className="font-semibold text-gray-800">{section.title}</h3>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              {section.topics.map((t, j) => (
                <li key={j}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
