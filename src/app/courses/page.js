"use client";
import { useState } from "react";
import Link from "next/link";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import { courses } from "./data";

export default function Page() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50 py-12 px-4 sm:px-10">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
          Course Curriculum
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Explore our complete list of technical training programs and enhance your career
          with hands-on learning experiences.
        </p>
      </header>

      {/* Table Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="min-w-full text-sm sm:text-base border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-red-600 text-white">
              <th className="py-3 px-4 text-left font-semibold">Course Name</th>
              <th className="py-3 px-4 text-left font-semibold">Course Content</th>
              <th className="py-3 px-4 text-left font-semibold">Register Now</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course, index) => (
              <tr
                key={course.slug || index}
                className={`border-b hover:bg-blue-50 transition ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="py-3 px-4 font-medium text-gray-800">
                  {course.name}
                </td>
                <td className="py-3 px-4">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    View Course
                  </Link>
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={handleOpen}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    SignUp !
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MUI Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-lg font-bold text-blue-700">
          🚀 Coming Soon
        </DialogTitle>
        <DialogContent>
          <p className="text-gray-700">
            We will launch for everyone on <b>15th November</b>. Stay tuned!
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
}
