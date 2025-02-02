import React from 'react';
import { BookOpen } from 'lucide-react';

interface Module {
  title: string;
}

interface CourseProps {
  id: string; // Hacer id requerido
  title: string;
  modules: Module[];
  level: string;
  duration: string;
}

export function CourseCard({ id, title, modules, level, duration }: CourseProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
          <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full">{level}</span>
          <span>{duration}</span>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900 mb-2">Módulos:</h4>
          <ul className="space-y-2">
            {modules.map((module, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-center space-x-2">
                <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 text-indigo-700 rounded-full text-xs">
                  {index + 1}
                </span>
                <span>{module.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}