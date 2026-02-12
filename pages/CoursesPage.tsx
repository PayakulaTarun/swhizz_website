import React from 'react';
import Courses from '../components/Courses';
import Projects from '../components/Projects';

const CoursesPage: React.FC = () => {
  return (
    <div className="pt-20">
      <Courses />
      <Projects />
    </div>
  );
};

export default CoursesPage;