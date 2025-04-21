import React from 'react';
import { NavLink } from 'react-router-dom';
import { Brain, BookOpen, BarChart2, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-64 bg-white border-r border-gray-200 p-4 hidden md:block">
      <div className="flex items-center gap-2 mb-8">
        <Brain className="w-8 h-8 text-indigo-600" />
        <h1 className="text-xl font-bold text-gray-900">UPSC AI</h1>
      </div>
      
      <div className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <BookOpen className="w-5 h-5" />
          <span>Dashboard</span>
        </NavLink>
        
        <NavLink
          to="/news"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <BookOpen className="w-5 h-5" />
          <span>News Engine</span>
        </NavLink>
        
        <NavLink
          to="/revision"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Brain className="w-5 h-5" />
          <span>Revision Tools</span>
        </NavLink>
        
        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <BarChart2 className="w-5 h-5" />
          <span>Analytics</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;