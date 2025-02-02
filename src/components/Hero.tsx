import { ArrowRight, PlayCircle, DollarSign, Globe, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const content = {
  en: {
    title: 'TicoAutomate',
    subtitle: 'Master RPA Development - 100% Free',
    description: 'Join our Costa Rican community and learn Robotic Process Automation with UiPath. Transform your career with in-demand skills.',
    benefits: [
      {
        icon: DollarSign,
        title: 'High Salaries',
        description: 'RPA developers earn competitive salaries worldwide'
      },
      {
        icon: Globe,
        title: 'Remote Work',
        description: 'Work from anywhere with global opportunities'
      },
      {
        icon: Clock,
        title: 'Flexible Hours',
        description: 'Enjoy work-life balance with flexible schedules'
      }
    ],
    cta: 'Start Learning',
    watchDemo: 'Watch Demo',
    loginPrompt: 'Sign in to begin',
  },
  es: {
    title: 'TicoAutomate',
    subtitle: 'Domina el Desarrollo RPA - 100% Gratuito',
    description: '¡Pura vida! Únete a nuestra comunidad tica y aprende Automatización Robótica de Procesos con UiPath. Transformá tu carrera con habilidades de alta demanda.',
    benefits: [
      {
        icon: DollarSign,
        title: 'Excelentes Salarios',
        description: 'Los desarrolladores RPA ganan salarios competitivos a nivel mundial'
      },
      {
        icon: Globe,
        title: 'Trabajo Remoto',
        description: 'Trabajá desde cualquier lugar con oportunidades globales'
      },
      {
        icon: Clock,
        title: 'Horarios Flexibles',
        description: 'Disfrutá del balance vida-trabajo con horarios flexibles'
      }
    ],
    cta: 'Empezar a Aprender',
    watchDemo: 'Ver Demo',
    loginPrompt: 'Iniciá sesión para comenzar',
  },
};

export function Hero() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const { user } = useAuth();
  const t = content[language];

  // Imagen de fondo que representa Costa Rica
  const backgroundImage = "https://images.unsplash.com/photo-1593537512471-c66fbc0a42ed?auto=format&fit=crop&q=80";

  return (
    <div className="relative min-h-screen">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-blue-800/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-green-200 mb-4">
            {t.subtitle}
          </h2>
          <p className="text-xl text-blue-100 mb-12">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            {user ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-500 transition-colors flex items-center justify-center"
              >
                {t.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-4 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-500 transition-colors flex items-center justify-center"
              >
                {t.loginPrompt}
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            )}
            <button
              onClick={() => navigate('/demo')}
              className="px-8 py-4 bg-white text-green-600 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors flex items-center justify-center"
            >
              <PlayCircle className="mr-2 w-5 h-5" />
              {t.watchDemo}
            </button>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {t.benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center">
              <benefit.icon className="w-12 h-12 text-green-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-blue-100">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}