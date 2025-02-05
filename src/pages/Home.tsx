import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { 
  ArrowRight, DollarSign, Globe, Clock, Briefcase, 
  BookOpen, Award, Building, Landmark, Code, Cog 
} from 'lucide-react';

const content = {
  hero: {
    title: "Inicia tu Carrera en RPA con TicoAutomate",
    subtitle: "Domina la Automatización Robótica de Procesos",
    description: "Únete a la principal plataforma de capacitación RPA en Costa Rica y accede a oportunidades con salarios desde $30,000 hasta $85,000 anuales",
    certification: "Desarrollador Profesional Certificado por UiPath",
    certificationYear: ""
  },
  experience: {
    title: "Experiencia Profesional",
    items: [
      {
        icon: Building,
        title: "Experto en Automatización",
        description: "Más de 7 años de experiencia práctica en RPA"
      },
      {
        icon: Landmark,
        title: "Sector Financiero",
        description: "Proyectos para instituciones financieras multinacionales"
      },
      {
        icon: Code,
        title: "Líder en Tecnología",
        description: "Experiencia con corporaciones tecnológicas globales"
      },
      {
        icon: Cog,
        title: "Optimización Bancaria",
        description: "Especializado en automatización de procesos bancarios"
      }
    ]
  },
  benefits: {
    title: "¿Por qué elegir RPA?",
    items: [
      {
        icon: DollarSign,
        title: "Salarios Competitivos",
        description: "Gana $30,000 - $85,000 al año"
      },
      {
        icon: Globe,
        title: "Trabajo Remoto",
        description: "Accede a oportunidades globales"
      },
      {
        icon: Briefcase,
        title: "Alta Demanda",
        description: "Únete a una industria en crecimiento"
      },
      {
        icon: Clock,
        title: "Horario Flexible",
        description: "Equilibra trabajo y vida personal"
      }
    ]
  },
  courses: {
    title: "Cursos Disponibles",
    available: {
      title: "Introducción a RPA y UiPath",
      description: "Aprende los fundamentos de RPA y comienza con UiPath",
      level: "Principiante",
      duration: "4 semanas",
      modules: 4
    },
    comingSoon: {
      title: "Próximamente",
      courses: [
        {
          icon: Cog,
          title: "Herramientas Técnicas Avanzadas",
          description: "Domina técnicas avanzadas de automatización - ¡100% GRATIS!",
          level: "Avanzado",
          duration: "6 semanas",
          status: "En construcción"
        },
        {
          icon: Building,
          title: "Gestión de Proyectos con Clientes",
          description: "Aprende a gestionar proyectos RPA efectivamente",
          level: "Intermedio",
          duration: "4 semanas",
          status: "En construcción"
        },
        {
          icon: Briefcase,
          title: "Desarrollo Profesional",
          description: "Posiciónate en el mercado laboral",
          level: "Administrativo",
          duration: "3 semanas",
          status: "En construcción"
        }
      ]
    }
  },
  cta: {
    primary: "Comienza Tu Viaje",
    secondary: "Conoce Más"
  }
};

const images = {
  hero: "https://images.unsplash.com/photo-1593537512471-c66fbc0a42ed?auto=format&fit=crop&q=80",
  pattern: "https://images.unsplash.com/photo-1624984632063-10fff73da4e4?auto=format&fit=crop&q=80"
};

export function Home() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleGetStarted = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-800">
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${images.hero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 to-blue-800/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl px-6 py-4 border border-green-400/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <Award className="w-8 h-8 text-green-400" />
                  </div>
                  <div className="text-left">
                    <div className="text-green-300 font-semibold text-lg">{content.hero.certification}</div>
                    <div className="text-green-400/80 text-sm">{content.hero.certificationYear}</div>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {content.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-green-300 mb-6">
              {content.hero.subtitle}
            </h2>
            <p className="text-xl text-blue-100 mb-12 leading-relaxed">
              {content.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-400 transition-colors flex items-center justify-center group"
              >
                {user ? 'Ir al Dashboard' : content.cta.primary}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://www.youtube.com/watch?v=3R67RGjZoOM&ab_channel=UiPath"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Que es un Robot de RPA?
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-20">
            {content.benefits.items.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-green-500/20 rounded-full mb-4">
                    <benefit.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              {content.experience.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {content.experience.items.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-green-500/20 rounded-full mb-4">
                      <item.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-900/50 to-transparent" />
      </div>

      {/* Courses Section */}
      <div className="bg-white/5 backdrop-blur-lg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {content.courses.title}
          </h2>

          {/* Available Course */}
          <div className="mb-16">
            <div
              onClick={handleGetStarted}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer border border-white/10 hover:border-green-400/30"
            >
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl border border-white/10">
                  <BookOpen className="w-12 h-12 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors mb-4">
                    {content.courses.available.title}
                  </h3>
                  <p className="text-blue-100 mb-6">
                    {content.courses.available.description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {content.courses.available.level}
                    </span>
                    <span className="text-blue-100 flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{content.courses.available.duration}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">
              {content.courses.comingSoon.title}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {content.courses.comingSoon.courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg border border-white/10">
                      <course.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {course.title}
                      </h4>
                      <span className="text-sm text-yellow-400">
                        {course.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-blue-100 mb-4">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-blue-200">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {course.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
