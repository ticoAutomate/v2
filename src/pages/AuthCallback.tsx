import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const url = new URL(window.location.href);

        const code = url.searchParams.get('code');
        const error = url.searchParams.get('error');

        if (error) {
          console.error('Error en confirmación:', error);
          navigate('/login', { replace: true });
          return;
        }

        if (code) {
          const { error: exchangeError } =
            await supabase.auth.exchangeCodeForSession(code);

          if (exchangeError) {
            console.error('Error exchange:', exchangeError.message);
            navigate('/login', { replace: true });
            return;
          }
        }

        // Si todo salió bien → dashboard
        navigate('/dashboard', { replace: true });

      } catch (err) {
        console.error('Error inesperado:', err);
        navigate('/login', { replace: true });
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="p-8 text-center">
      Confirmando correo...
    </div>
  );
}
