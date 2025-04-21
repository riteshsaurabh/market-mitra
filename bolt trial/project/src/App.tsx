import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Brain, BookOpen, BarChart2, Settings, Menu } from 'lucide-react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import NewsEngine from './components/NewsEngine';
import RevisionTools from './components/RevisionTools';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <Navbar />
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/news" element={<NewsEngine />} />
            <Route path="/revision" element={<RevisionTools />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;