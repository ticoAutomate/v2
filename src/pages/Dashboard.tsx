import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  BookOpen, Wrench, Users, Briefcase, 
  ChevronRight, Clock, ArrowLeft 
} from 'lucide-react';

const courses = [
  {
    id: "1",
    title: "Introducción a RPA y UiPath",
    description: "Aprende los fundamentos de RPA y comienza con UiPath",
    level: "Principiante",
    duration: "4 semanas",
    progress: 0,
    icon: BookOpen,
    modules: 4,
    status: "available"
  },
  {
    id: "2",
    title: "Avanzado - Herramientas y Habilidades Técnicas Esenciales para Automatizar",
    description: "Domina técnicas avanzadas de automatización y herramientas técnicas esenciales para soluciones RPA complejas - ¡100% GRATIS!",
    level: "Avanzado",
    duration: "6 semanas",
    progress: 0,
    icon: Wrench,
    modules: 6,
    status: "construction"
  },
  {
    id: "3",
    title: "Gestión de Proyectos con Clientes",
    description: "Aprende a gestionar proyectos RPA y trabajar efectivamente con clientes",
    level: "Intermedio",
    duration: "4 semanas",
    progress: 0,
    icon: Users,
    modules: 4,
    status: "construction"
  },
  {
    id: "4",
    title: "Posicionamiento en el Mercado Laboral y Desarrollo Profesional",
    description: "Posiciónate en el mercado laboral y acelera tu crecimiento profesional",
    level: "Administrativo",
    duration: "3 semanas",
    progress: 0,
    icon: Briefcase,
    modules: 3,
    status: "construction"
  }
];

export function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  // Obtener el nombre de usuario del email (todo antes del @)
  const username = user?.email ? user.email.split('@')[0] : '';
  // Capitalizar la primera letra
  const displayName = username.charAt(0).toUpperCase() + username.slice(1);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Avanzado':
        return 'bg-green-500/20 text-green-400 border-green-400/20';
      case 'Intermedio':
        return 'bg-blue-500/20 text-blue-400 border-blue-400/20';
      case 'Administrativo':
        return 'bg-purple-500/20 text-purple-400 border-purple-400/20';
      default:
        return 'bg-indigo-500/20 text-indigo-400 border-indigo-400/20';
    }
  };

  const getStatusBadge = (status: string) => {
    if (status === 'construction') {
      return (
        <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-400/20">
          En construcción
        </span>
      );
    }
    return null;
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-800">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1593537512471-c66fbc0a42ed?auto=format&fit=crop&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Bienvenido, <span className="text-green-400">{displayName}</span>
            </h1>
            <p className="text-blue-100">
              Continúa tu viaje de aprendizaje
            </p>
          </div>
          <Link
            to="/"
            className="flex items-center space-x-2 text-blue-100 hover:text-green-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al Inicio</span>
          </Link>
        </div>

        {/* Available Courses */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Curso Disponible</h2>
          <div className="grid grid-cols-1 gap-6">
            {courses
              .filter(course => course.status === 'available')
              .map((course) => (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all hover:transform hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-xl ${getLevelColor(course.level)} border backdrop-blur-lg`}>
                      <course.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                          {course.title}
                        </h3>
                        <ChevronRight className="w-5 h-5 text-blue-100 group-hover:text-green-400 transition-colors" />
                      </div>
                      <p className="text-blue-100 mb-4">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`px-3 py-1 rounded-full text-sm border backdrop-blur-lg ${getLevelColor(course.level)}`}>
                            {course.level}
                          </span>
                          <span className="text-sm text-blue-100 flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{course.duration}</span>
                          </span>
                          <span className="text-sm text-blue-100 flex items-center space-x-1">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.modules} módulos</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Coming Soon Courses */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Próximamente</h2>
          <div className="grid grid-cols-1 gap-6">
            {courses
              .filter(course => course.status === 'construction')
              .map((course) => (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all hover:transform hover:scale-[1.02]"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-xl ${getLevelColor(course.level)} border backdrop-blur-lg`}>
                      <course.icon className="w-8 h-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                          {course.title}
                        </h3>
                        <div className="flex items-center space-x-3">
                          {getStatusBadge(course.status)}
                          <ChevronRight className="w-5 h-5 text-blue-100 group-hover:text-yellow-400 transition-colors" />
                        </div>
                      </div>
                      <p className="text-blue-100 mb-4">{course.description}</p>
                      <div className="flex items-center space-x-4">
                        <span className={`px-3 py-1 rounded-full text-sm border backdrop-blur-lg ${getLevelColor(course.level)}`}>
                          {course.level}
                        </span>
                        <span className="text-sm text-blue-100 flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}