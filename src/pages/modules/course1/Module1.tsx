import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { ArrowLeft, FileText, ExternalLink, MessageCircle, Send, Bot, Cog, Layout, Code, CheckCircle } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

interface Comment {
  id: string;
  name: string;
  content: string;
  created_at: string;
}

interface ModuleProgress {
  [key: string]: boolean;
}

const moduleContent = {
  title: "Introducción a RPA y UiPath",
  description: "En este módulo, exploraremos los fundamentos de la Automatización Robótica de Procesos (RPA) y comenzaremos con UiPath. Aprenderás sobre los conceptos clave, beneficios y aplicaciones del mundo real de la tecnología RPA.",
  sections: [
    {
      title: "Parte 1: ¿Qué es RPA y Casos de Uso en la Industria?",
      video: "M1C1_1de4.v2.mp4",
      content: [
        {
          title: "¿Qué es RPA?",
          items: [
            "Definición y conceptos principales",
            "Componentes clave de RPA",
            "Beneficios y ventajas",
            "RPA vs automatización tradicional"
          ]
        },
        {
          title: "Casos de Uso en la Industria",
          items: [
            "Banca y Finanzas",
            "Salud",
            "Recursos Humanos",
            "Servicio al Cliente",
            "Gestión de Cadena de Suministro"
          ]
        }
      ]
    },
    {
      title: "Parte 2: Comenzando con UiPath",
      video: "M1C1_2de4.v2.mp4",
      content: [
        {
          title: "Cuenta en UiPath Automation Cloud",
          items: [
            "Creación de cuenta Community",
            "Opciones de licenciamiento",
            "Acceso a recursos de UiPath",
            "Beneficios de la comunidad"
          ]
        }
      ]
    },
    {
      title: "Parte 3: Fundamentos de UiPath Studio",
      video: "M1C1_3de4.v2.mp4",
      content: [
        {
          title: "Interfaz de Usuario",
          items: [
            "Componentes de la ventana principal",
            "Vista general de la cinta",
            "Panel de proyecto",
            "Panel de propiedades"
          ]
        }
      ]
    },
    {
      title: "Parte 4: Primeros Pasos",
      video: "M1C1_4de4.v2.mp4",
      content: [
        {
          title: "Comenzando",
          items: [
            "Configuración inicial",
            "Crear primer proyecto",
            "Elementos básicos",
            "Mejores prácticas"
          ]
        }
      ]
    }
  ],
  resources: [
    {
      title: "Crear Cuenta Community",
      type: "link",
      url: "https://cloud.uipath.com/portal_/register?subscriptionPlan=community&ecommerceRedirect=false"
    },
    {
      title: "Descargar Studio Desktop",
      type: "link",
      url: "https://download.uipath.com/UiPathStudioCommunity.msi"
    }
  ]
};

export function Module1() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [currentVideo, setCurrentVideo] = useState(0);
  const [videoUrls, setVideoUrls] = useState<(string | null)[]>([null, null, null, null]);
  const [progress, setProgress] = useState<ModuleProgress>({});

  useEffect(() => {
    fetchComments();
    fetchVideos();
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
      data?.forEach(item => {
        progressMap[item.module_id] = item.completed;
      });
      setProgress(progressMap);
    } catch (err) {
      console.error('Error fetching progress:', err);
    }
  };

  const toggleProgress = async (moduleId: string) => {
    if (!user) return;

    const newCompleted = !progress[moduleId];
    
    try {
      // First try to select the existing record
      const { data: existingData } = await supabase
        .from('course_progress')
        .select('id')
        .eq('user_id', user.id)
        .eq('course_id', '1')
        .eq('module_id', moduleId)
        .single();

      if (existingData) {
        // If record exists, update it
        const { error } = await supabase
          .from('course_progress')
          .update({ completed: newCompleted })
          .eq('id', existingData.id);

        if (error) throw error;
      } else {
        // If record doesn't exist, insert it
        const { error } = await supabase
          .from('course_progress')
          .insert({
            user_id: user.id,
            course_id: '1',
            module_id: moduleId,
            completed: newCompleted
          });

        if (error) throw error;
      }

      // Update local state
      setProgress(prev => ({
        ...prev,
        [moduleId]: newCompleted
      }));

      // Refetch progress to ensure UI is in sync
      fetchProgress();
    } catch (err) {
      console.error('Error updating progress:', err);
    }
  };

  const fetchVideos = async () => {
    try {
      const videos = await Promise.all(
        moduleContent.sections.map(async (section) => {
          try {
            const { data, error } = await supabase.storage
              .from('Curso1')
              .getPublicUrl(section.video);
              
            if (error) throw error;
            return data?.publicUrl || null;
          } catch (err) {
            console.error(`Error fetching video ${section.video}:`, err);
            return null;
          }
        })
      );
      setVideoUrls(videos);
    } catch (err) {
      console.error('Error fetching videos:', err);
    }
  };

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('module_comments')
        .select('*')
        .eq('module_id', '1')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setComments(data || []);
    } catch (err) {
      console.error('Error fetching comments:', err);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !newComment.trim()) return;

    try {
      const { error } = await supabase
        .from('module_comments')
        .insert({
          module_id: '1',
          name: name.trim(),
          content: newComment.trim()
        });

      if (error) throw error;

      setNewComment('');
      fetchComments();
    } catch (err) {
      console.error('Error posting comment:', err);
    }
  };

  const icons = [Bot, Cog, Layout, Code] as const;
  const SectionIcon = ({ index }: { index: number }) => {
    const Icon = icons[index] || icons[0];
    return <Icon className="w-6 h-6" />;
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
          onClick={() => navigate('/course/1')}
          className="flex items-center space-x-2 text-blue-100 hover:text-green-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al Curso</span>
        </button>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10">
          <div className="p-6 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-lg">
            <h1 className="text-3xl font-bold text-white mb-2">{moduleContent.title}</h1>
            <p className="text-blue-100">{moduleContent.description}</p>
          </div>

          <div className="p-6">
            {/* Video Navigation */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {moduleContent.sections.map((section, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentVideo(index)}
                  className={`p-4 rounded-lg border transition-all cursor-pointer relative ${
                    currentVideo === index
                      ? 'bg-green-500/20 border-green-400/50 text-white'
                      : 'bg-white/5 border-white/10 text-blue-100 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <SectionIcon index={index} />
                      <span className="text-sm font-medium">{`Parte ${index + 1}`}</span>
                    </div>
                    {user && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleProgress(`1-${index + 1}`);
                        }}
                        className={`p-1 rounded-full transition-colors ${
                          progress[`1-${index + 1}`]
                            ? 'text-green-400 hover:text-green-300'
                            : 'text-gray-400 hover:text-gray-300'
                        }`}
                      >
                        <CheckCircle className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Video Section */}
            <div className="mb-8">
              {videoUrls[currentVideo] && (
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <video 
                    key={videoUrls[currentVideo]}
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                  >
                    <source src={videoUrls[currentVideo]} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              )}
            </div>

            {/* Current Section Content */}
            <div className="prose max-w-none mb-12">
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {moduleContent.sections[currentVideo].title}
                </h2>
                {moduleContent.sections[currentVideo].content.map((topic, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <h3 className="text-xl font-semibold text-green-400 mb-3">
                      {topic.title}
                    </h3>
                    <ul className="space-y-2">
                      {topic.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-blue-100 flex items-start space-x-2">
                          <span className="text-green-400">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">
                Recursos Esenciales
              </h2>
              <div className="grid gap-4">
                {moduleContent.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/5 backdrop-blur-lg rounded-lg hover:bg-white/10 transition-colors group border border-white/5 hover:border-green-400/30"
                  >
                    <ExternalLink className="w-5 h-5 text-green-400" />
                    <div className="flex-1">
                      <h3 className="text-white group-hover:text-green-400 transition-colors">
                        {resource.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="border-t border-white/10 pt-8">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  Comentarios
                </h2>

                <div className="mb-8">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingresa tu nombre o nickname"
                    className="w-full mb-4 rounded-lg bg-white/5 border-white/10 focus:ring-green-400 focus:border-green-400 text-white placeholder-blue-200"
                  />
                  <form onSubmit={handleSubmitComment} className="flex gap-2">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Escribe tu comentario..."
                      className="flex-1 rounded-lg bg-white/5 border-white/10 focus:ring-green-400 focus:border-green-400 text-white placeholder-blue-200"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Enviar
                    </button>
                  </form>
                </div>

                <div className="space-y-6 max-h-96 overflow-y-auto pr-4 custom-scrollbar">
                  {comments.length === 0 ? (
                    <p className="text-blue-100 text-center py-8">
                      Aún no hay comentarios. ¡Sé el primero en comentar!
                    </p>
                  ) : (
                    comments.map(comment => (
                      <div key={comment.id} className="bg-white/5 backdrop-blur-lg rounded-lg p-4 border border-white/10">
                        <div className="font-medium text-white mb-1">{comment.name}</div>
                        <p className="text-blue-100">{comment.content}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}