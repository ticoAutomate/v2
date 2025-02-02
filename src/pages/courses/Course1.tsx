import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface ModuleProgress {
  [key: string]: boolean;
}

const courseContent = {
  id: "1",
  title: "Introducción y Fundamentos de UiPath RPA",
  description: "Construye una base sólida en RPA, UiPath y los fundamentos de programación necesarios para desarrollar soluciones básicas de automatización.",
  objective: "Objetivo General: Proporcionar una base sólida sobre RPA, UiPath y los fundamentos de programación necesarios para desarrollar soluciones básicas de automatización.",
  modules: [
    {
      id: "1",
      title: "Módulo 1: Introducción a RPA y UiPath",
      description: "Aprende los conceptos básicos de RPA y comienza con UiPath",
    },
    {
      id: "2",
      title: "Módulo 2: Fundamentos de Programación",
      description: "Domina los conceptos esenciales de programación",
    },
    {
      id: "3",
      title: "Módulo 3: Automatización Básica con UiPath",
      description: "Comienza a construir tus primeras automatizaciones",
    },
    {
      id: "4",
      title: "Módulo 4: Proyecto Final",
      description: "Aplica tus conocimientos en un proyecto del mundo real",
    }
  ]
};

export function Course1() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [progress, setProgress] = useState<ModuleProgress>({});
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    if (user) {
      fetchProgress();
    }
  }, [user]);

  const fetchProgress = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('course_progress')
        .select('module_id, completed')
        .eq('course_id', '1')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching progress:', error);
        return;
      }

      const progressMap: ModuleProgress = {};
      let completedCount = 0;

      data?.forEach(item => {
        progressMap[item.module_id] = item.completed;
        if (item.completed) completedCount++;
      });

      setProgress(progressMap);
      setOverallProgress(Math.round((completedCount / (courseContent.modules.length * 4)) * 100));
    } catch (err) {
      console.error('Error fetching progress:', err);
    }
  };

  const getModuleProgress = (moduleId: string) => {
    let completedCount = 0;
    for (let i = 1; i <= 4; i++) {
      if (progress[`${moduleId}-${i}`]) completedCount++;
    }
    return Math.round((completedCount / 4) * 100);
  };

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
        <button
          onClick={() => navigate('/dashboard')}
          className="group flex items-center space-x-2 text-blue-100 hover:text-green-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Volver al Dashboard</span>
        </button>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-xl">
          <div className="flex items-center space-x-6 mb-8">
            <div className="p-4 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-xl border border-white/10 shadow-inner">
              <BookOpen className="w-12 h-12 text-green-400" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-3">{courseContent.title}</h1>
              <p className="text-lg text-blue-100">{courseContent.description}</p>
            </div>
          </div>

          {user && (
            <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-semibold text-white">Progreso General</h2>
                <span className="text-green-400 font-semibold">{overallProgress}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2.5">
                <div 
                  className="bg-green-500 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${overallProgress}%` }}
                />
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-6">
            {courseContent.modules.map((module) => (
              <Link 
                key={module.id}
                to={`/course/1/module/${module.id}`}
                className="block bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-green-400/30 transition-all cursor-pointer hover:transform hover:scale-[1.02] relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-green-400 transition-colors">
                    {module.title}
                  </h3>
                  {user && (
                    <div className="flex items-center space-x-3">
                      <span className="text-green-400 font-medium">
                        {getModuleProgress(module.id)}%
                      </span>
                      <div className="w-20 bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${getModuleProgress(module.id)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-blue-100">{module.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}