import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { Navigation } from './components/Navigation';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';
import { Dashboard } from './pages/Dashboard';
import { Course1 } from './pages/courses/Course1';
import { Course2 } from './pages/courses/Course2';
import { Course3 } from './pages/courses/Course3';
import { Course4 } from './pages/courses/Course4';
import { Module1 } from './pages/modules/course1/Module1';
import { Module2 } from './pages/modules/course1/Module2';
import { Module3 } from './pages/modules/course1/Module3';
import { Module4 } from './pages/modules/course1/Module4';
import { Login } from './pages/Login';
import { AuthCallback } from './pages/AuthCallback';

function ScrollToAnchor() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const animationFrame = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return () => cancelAnimationFrame(animationFrame);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <ScrollToAnchor />
          <div className="min-h-screen bg-[#060e1d]">
            <Navigation />
            <main className="pt-[76px]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/login" element={<Login />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
                <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                <Route path="/course/1" element={<ProtectedRoute><Course1 /></ProtectedRoute>} />
                <Route path="/course/2" element={<ProtectedRoute><Course2 /></ProtectedRoute>} />
                <Route path="/course/3" element={<ProtectedRoute><Course3 /></ProtectedRoute>} />
                <Route path="/course/4" element={<ProtectedRoute><Course4 /></ProtectedRoute>} />
                <Route path="/course/1/module/1" element={<ProtectedRoute><Module1 /></ProtectedRoute>} />
                <Route path="/course/1/module/2" element={<ProtectedRoute><Module2 /></ProtectedRoute>} />
                <Route path="/course/1/module/3" element={<ProtectedRoute><Module3 /></ProtectedRoute>} />
                <Route path="/course/1/module/4" element={<ProtectedRoute><Module4 /></ProtectedRoute>} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
