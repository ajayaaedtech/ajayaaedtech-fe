'use client';
import { motion } from 'framer-motion';
// import ComingSoon from '../components/ComingSoon';
// import TechCourses from './techCourses';
import CourseList from './CourseList';
export default function Courses() {
  return (
 
    // <>
    // <TechCourses/>
    // </>
     <main className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 p-6">
      <CourseList />
    </main>
  );
}
