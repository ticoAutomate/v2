import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowLeft, Construction } from 'lucide-react';

const courseContent = {
  en: {
    title: "Client Project Management",
    description: "Learn how to manage RPA projects and work effectively with clients.",
    objective: "Coming Soon - This course is currently under development.",
  },
  es: {
    title: "Gestión de Proyectos con Clientes",
    description: "Aprende a gestionar proyectos RPA y trabajar efectivamente con clientes.",
    objective: "Próximamente - Este curso está actualmente en desarrollo.",
  }
};

export function Course3() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const course = courseContent[language];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center space-x-2 text-gray-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{language === 'en' ? 'Back to Dashboard' : 'Volver al Dashboard'}</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <Construction className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
        <p className="text-xl text-gray-600 mb-6">{course.description}</p>
        <div className="bg-yellow-50 rounded-lg p-6 inline-block">
          <p className="text-yellow-800 text-lg">
            {course.objective}
          </p>
        </div>
      </div>
    </div>
  );
}