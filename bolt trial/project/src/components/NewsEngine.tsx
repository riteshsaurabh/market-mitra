import React from 'react';
import { Newspaper } from 'lucide-react';

function NewsEngine() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center gap-3">
        <Newspaper className="h-8 w-8 text-blue-600" />
        <h1 className="text-3xl font-bold text-gray-900">News Engine</h1>
      </div>
      
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Latest Updates</h2>
          <p className="text-gray-600">News content will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}

export default NewsEngine;