import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  lessons: string[];
}

export function ModuleCard({ title, description, icon: Icon, lessons }: ModuleCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-indigo-600" />
        <h3 className="ml-3 text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {lessons.map((lesson) => (
          <li key={lesson} className="flex items-center text-sm text-gray-500">
            <span className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
            {lesson}
          </li>
        ))}
      </ul>
      <button className="mt-6 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
        Start Learning
      </button>
    </div>
  );
}