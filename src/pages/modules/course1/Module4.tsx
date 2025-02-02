import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';

export function Module4() {
  const navigate = useNavigate();

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

        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center border border-white/10">
          <Construction className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-white mb-4">Módulo en Construcción</h1>
          <p className="text-xl text-blue-100 mb-6">
            Este módulo está actualmente en desarrollo. ¡Pronto estará disponible!
          </p>
          <div className="bg-yellow-500/10 rounded-lg p-6 inline-block border border-yellow-400/30">
            <p className="text-yellow-300 text-lg">
              Estamos trabajando para brindarte el mejor contenido posible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}