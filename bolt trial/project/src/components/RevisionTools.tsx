import React from 'react';
import { Brain, Clock, CheckCircle } from 'lucide-react';

function RevisionTools() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center gap-3">
        <Brain className="h-8 w-8 text-purple-600" />
        <h1 className="text-3xl font-bold text-gray-900">Revision Tools</h1>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold text-gray-700">Due Today</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">8 Cards</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold text-gray-700">Completed</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">12 Cards</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Brain className="h-5 w-5 text-purple-500" />
            <h3 className="font-semibold text-gray-700">Mastered</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">45 Cards</p>
        </div>
      </div>

      {/* Revision Cards */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Today's Revision Cards</h2>
        <div className="space-y-4">
          {[
            {
              title: "Monetary Policy Committee",
              category: "Economy",
              dueIn: "2 hours",
              difficulty: "Medium"
            },
            {
              title: "Article 370",
              category: "Polity",
              dueIn: "4 hours",
              difficulty: "Hard"
            },
            {
              title: "Paris Climate Agreement",
              category: "Environment",
              dueIn: "6 hours",
              difficulty: "Medium"
            }
          ].map((card, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900">{card.title}</h3>
                <span className={`px-2 py-1 rounded text-sm ${
                  card.difficulty === 'Hard' 
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {card.difficulty}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{card.category}</span>
                <span>Due in {card.dueIn}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RevisionTools;