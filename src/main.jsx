import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { ClockworkProvider } from './context/ClockworkContext';
import { LanguageProvider } from './context/LanguageContext';
import './index.css';

// ZeroCog | Main Entry Point (v3.0 - Professional Refactor)
// Implements standard React Router for robust SPA navigation and state management.

const Root = () => {
  return (
    <LanguageProvider>
      <ClockworkProvider>
        <BrowserRouter>
        <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Fallback / Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ClockworkProvider>
    </LanguageProvider>
  );
};

const container = document.getElementById('root');
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  );
} else {
  console.error('[ZeroCog] FATAL: #root container missing from DOM');
}
