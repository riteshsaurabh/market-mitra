import React from 'react';
import { BarChart2, TrendingUp, Users, Clock } from 'lucide-react';

function Analytics() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-center gap-3">
        <BarChart2 className="h-8 w-8 text-orange-600" />
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="h-5 w-5 text-green-500" />
            <h3 className="font-semibold text-gray-700">Overall Progress</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">85%</p>
          <p className="text-sm text-gray-600 mt-1">+5% from last week</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <h3 className="font-semibold text-gray-700">Study Hours</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">24.5 hrs</p>
          <p className="text-sm text-gray-600 mt-1">This week</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-5 w-5 text-purple-500" />
            <h3 className="font-semibold text-gray-700">Peer Ranking</h3>
          </div>
          <p className="text-2xl font-bold text-gray-900">Top 15%</p>
          <p className="text-sm text-gray-600 mt-1">Among active users</p>
        </div>
      </div>

      {/* Subject Performance */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Subject Performance</h2>
        <div className="space-y-4">
          {[
            {
              subject: "Indian Polity",
              progress: 92,
              trend: "up"
            },
            {
              subject: "Economics",
              progress: 78,
              trend: "up"
            },
            {
              subject: "Environment",
              progress: 85,
              trend: "down"
            },
            {
              subject: "International Relations",
              progress: 70,
              trend: "up"
            }
          ].map((subject, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="font-medium text-gray-700">{subject.subject}</span>
                  <span className="text-sm font-medium text-gray-900">{subject.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full" 
                    style={{ width: `${subject.progress}%` }}
                  ></div>
                </div>
              </div>
              <TrendingUp 
                className={`h-5 w-5 ${
                  subject.trend === 'up' ? 'text-green-500' : 'text-red-500'
                } ${subject.trend === 'down' && 'transform rotate-180'}`} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Weekly Activity</h2>
        <div className="grid grid-cols-7 gap-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-full bg-blue-100 rounded-lg"
                style={{ 
                  height: `${Math.random() * 100 + 20}px`,
                  backgroundColor: `rgba(59, 130, 246, ${Math.random() * 0.5 + 0.1})`
                }}
              ></div>
              <span className="text-sm text-gray-600 mt-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][index]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Analytics;