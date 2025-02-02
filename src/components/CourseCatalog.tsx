import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { CourseCard } from './CourseCard';

const courses = {
  en: [
    {
      id: "1",
      title: "Introduction and Fundamentals of UiPath RPA",
      modules: [
        { title: "Module 1: Introduction to RPA and UiPath" },
        { title: "Module 2: Programming Fundamentals" },
        { title: "Module 3: Basic Automation with UiPath" },
        { title: "Module 4: Final Project" },
        { title: "Additional Resources" }
      ],
      level: "Beginner",
      duration: "4 weeks"
    }
  ],
  es: [
    {
      id: "1",
      title: "Introducción y Fundamentos de UiPath RPA",
      modules: [
        { title: "Módulo 1: Introducción a RPA y UiPath" },
        { title: "Módulo 2: Fundamentos de Programación" },
        { title: "Módulo 3: Automatización Básica con UiPath" },
        { title: "Módulo 4: Proyecto Final" },
        { title: "Recursos Adicionales" }
      ],
      level: "Principiante",
      duration: "4 semanas"
    }
  ]
};

export function CourseCatalog() {
  const { language } = useLanguage();
  const currentCourses = courses[language];

  return (
    <section className="py-16 bg-gradient-to-br from-green-900/10 to-blue-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          {language === 'en' ? 'Available Courses' : 'Cursos Disponibles'}
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {currentCourses.map((course) => (
            <Link 
              key={course.id} 
              to={`/course/${course.id}`}
              className="block cursor-pointer transition-transform hover:scale-[1.02]"
            >
              <CourseCard {...course} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}