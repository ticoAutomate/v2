import { Bot, LogOut, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function Navigation() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await signOut();
      navigate('/', { replace: true });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('https://chat.whatsapp.com/G4OTmXMLabFFlUVR5wo0Mx', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-green-900/80 to-blue-800/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-green-400 transition-colors"
            >
              <Bot className="w-8 h-8 text-green-400" />
              <span className="font-bold text-xl">PuraVida RPA</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 px-4 py-2 text-white hover:text-green-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Grupo WhatsApp</span>
            </button>
            
            {/* Sign Out Button */}
            {user && (
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-4 py-2 text-white hover:text-green-400 transition-colors group"
              >
                <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span>Cerrar Sesión</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}