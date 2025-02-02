import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { AlertCircle, Mail, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const content = {
  title: 'Bienvenido a TicoAutomate',
  subtitle: 'Inicia sesión para comenzar tu viaje RPA',
  emailLabel: 'Correo electrónico',
  passwordLabel: 'Contraseña',
  signInButton: 'Iniciar Sesión',
  signUpButton: 'Crear Cuenta',
  terms: 'Al iniciar sesión, aceptas nuestros Términos de Servicio y Política de Privacidad',
  configError: 'Configuración de autenticación requerida',
  configMessage: 'Por favor, haz clic en el botón "Connect to Supabase" en el editor para configurar la autenticación.',
};

export function Login() {
  const { signIn, signUp, error: authError, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      await signUp(email, password);
    } else {
      await signIn(email, password);
    }
  };

  if (authError?.includes('configuration')) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-800 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
          <div className="text-center mb-8">
            <AlertCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white mb-2">{content.configError}</h1>
            <p className="text-blue-100">{content.configMessage}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 to-blue-800">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1593537512471-c66fbc0a42ed?auto=format&fit=crop&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Login Form */}
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="max-w-md w-full">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-3">{content.title}</h1>
              <p className="text-xl text-blue-100">{content.subtitle}</p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100">
                    {content.emailLabel}
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-100 group-hover:text-green-400 transition-colors duration-300" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 block w-full rounded-lg bg-white/5 border-white/10 text-white placeholder-blue-200 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-blue-100">
                    {content.passwordLabel}
                  </label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-100 group-hover:text-green-400 transition-colors duration-300" />
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="pl-10 block w-full rounded-lg bg-white/5 border-white/10 text-white placeholder-blue-200 focus:ring-green-400 focus:border-green-400 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {authError && !authError.includes('configuration') && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-red-400 text-sm">
                    {authError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-3 px-4 rounded-lg text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 disabled:opacity-50 transition-all duration-300 group"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{isSignUp ? content.signUpButton : content.signInButton}</span>
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="w-full text-sm text-blue-100 hover:text-green-400 transition-colors duration-300"
                >
                  {isSignUp ? content.signInButton : content.signUpButton}
                </button>
              </form>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <Link 
                to="/"
                className="text-sm text-blue-100 hover:text-green-400 transition-colors"
              >
                Volver al inicio
              </Link>
              <p className="text-sm text-blue-100/80">
                {content.terms}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}