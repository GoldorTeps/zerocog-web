import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import InvestorArea from './pages/InvestorArea';
import './index.css';

// ZeroCog | Main Entry Point (v3.0 - Professional Refactor)
// Implements standard React Router for robust SPA navigation and state management.

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Investor Portal Flow */}
        <Route path="/login" element={<Login />} />
        <Route path="/investor" element={<InvestorArea />} />
        
        {/* Fallback / Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
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
