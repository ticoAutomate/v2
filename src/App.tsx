import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';
import { Navigation } from './components/Navigation';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Home } from './pages/Home';
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

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main className="pt-16"> {/* Añadido padding-top para compensar la navbar fija */}
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                
                {/* Protected Routes */}
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/course/1" element={
                  <ProtectedRoute>
                    <Course1 />
                  </ProtectedRoute>
                } />
                <Route path="/course/2" element={
                  <ProtectedRoute>
                    <Course2 />
                  </ProtectedRoute>
                } />
                <Route path="/course/3" element={
                  <ProtectedRoute>
                    <Course3 />
                  </ProtectedRoute>
                } />
                <Route path="/course/4" element={
                  <ProtectedRoute>
                    <Course4 />
                  </ProtectedRoute>
                } />
                <Route path="/course/1/module/1" element={
                  <ProtectedRoute>
                    <Module1 />
                  </ProtectedRoute>
                } />
                <Route path="/course/1/module/2" element={
                  <ProtectedRoute>
                    <Module2 />
                  </ProtectedRoute>
                } />
                <Route path="/course/1/module/3" element={
                  <ProtectedRoute>
                    <Module3 />
                  </ProtectedRoute>
                } />
                <Route path="/course/1/module/4" element={
                  <ProtectedRoute>
                    <Module4 />
                  </ProtectedRoute>
                } />

                {/* Catch all route */}
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