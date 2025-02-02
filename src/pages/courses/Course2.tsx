import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowLeft, Construction, BellRing, Send, MessageCircle, Clock, Star, Users, Trophy } from 'lucide-react';

const courseContent = {
  en: {
    title: "Advanced - Essential Technical Tools and Skills for Automation",
    description: "Master advanced automation techniques and essential technical tools for complex RPA solutions.",
    objective: "Coming Soon - This course is currently under development and will be 100% FREE!",
    notificationTitle: "Get Notified",
    notificationText: "Enter your email to be notified when this free course is available",
    whatsappText: "Contact via WhatsApp",
    emailPlaceholder: "Enter your email",
    submitButton: "Notify Me",
    successMessage: "Great! We'll notify you when the course is ready.",
    stats: [
      { icon: Clock, label: "Duration", value: "6 weeks" },
      { icon: Star, label: "Level", value: "Advanced" },
      { icon: Users, label: "Students", value: "Coming Soon" },
      { icon: Trophy, label: "Certificate", value: "Included" }
    ]
  },
  es: {
    title: "Avanzado - Herramientas y Habilidades Técnicas Esenciales para Automatizar",
    description: "Domina técnicas avanzadas de automatización y herramientas técnicas esenciales para soluciones RPA complejas.",
    objective: "Próximamente - Este curso está actualmente en desarrollo y será 100% GRATUITO!",
    notificationTitle: "Recibe Notificaciones",
    notificationText: "Ingresa tu correo para ser notificado cuando este curso gratuito esté disponible",
    whatsappText: "Contactar por WhatsApp",
    emailPlaceholder: "Ingresa tu correo",
    submitButton: "Notificarme",
    successMessage: "¡Genial! Te notificaremos cuando el curso esté listo.",
    stats: [
      { icon: Clock, label: "Duración", value: "6 semanas" },
      { icon: Star, label: "Nivel", value: "Avanzado" },
      { icon: Users, label: "Estudiantes", value: "Próximamente" },
      { icon: Trophy, label: "Certificado", value: "Incluido" }
    ]
  }
};

export function Course2() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const course = courseContent[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/50684078428', '_blank');
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
          className="flex items-center space-x-2 text-blue-100 hover:text-green-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{language === 'en' ? 'Back to Dashboard' : 'Volver al Dashboard'}</span>
        </button>

        <div className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10">
          {/* Course Header */}
          <div className="p-8 bg-gradient-to-r from-green-500/20 to-blue-500/20">
            <div className="flex items-center space-x-6 mb-8">
              <div className="p-4 bg-yellow-500/20 rounded-xl border border-yellow-400/30">
                <Construction className="w-12 h-12 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white mb-3">{course.title}</h1>
                <p className="text-lg text-blue-100">{course.description}</p>
              </div>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {course.stats.map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-3">
                    <stat.icon className="w-5 h-5 text-yellow-400" />
                    <div>
                      <p className="text-sm text-blue-200">{stat.label}</p>
                      <p className="text-white font-semibold">{stat.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8">
            {/* Construction Notice */}
            <div className="bg-yellow-500/10 rounded-xl p-6 mb-8 border border-yellow-400/30">
              <div className="flex items-center gap-3 mb-4">
                <Construction className="w-8 h-8 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">{course.objective}</h2>
              </div>
            </div>

            {/* Notification Form */}
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <BellRing className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">{course.notificationTitle}</h3>
                </div>
                <p className="text-blue-100 mb-6">{course.notificationText}</p>
                
                {submitted ? (
                  <div className="bg-green-500/20 text-green-400 rounded-lg p-4 text-center">
                    {course.successMessage}
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={course.emailPlaceholder}
                      className="flex-1 rounded-lg bg-white/5 border-white/10 focus:ring-green-400 focus:border-green-400 text-white placeholder-blue-200"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      {course.submitButton}
                    </button>
                  </form>
                )}
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full py-3 px-4 bg-green-500 text-white rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {course.whatsappText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}