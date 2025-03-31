import React from 'react';
import { Trophy, Star, Target } from 'lucide-react';
import { AudioButton } from '../common/AudioButton';

interface Milestone {
  id: number;
  title: string;
  description: string;
  points: number;
  completed: boolean;
}

const milestones: Milestone[] = [
  {
    id: 1,
    title: 'First On-Time Payment',
    description: 'Complete your first EMI payment before the due date',
    points: 100,
    completed: true,
  },
  {
    id: 2,
    title: 'Three Month Streak',
    description: 'Pay EMIs on time for three consecutive months',
    points: 300,
    completed: false,
  },
  {
    id: 3,
    title: 'Credit Master',
    description: 'Maintain a credit score above 750 for 6 months',
    points: 500,
    completed: false,
  },
];

export function CreditMilestones() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Your Credit Journey</h3>
        <AudioButton label="Listen to Tips" />
      </div>
      
      <div className="space-y-6">
        {milestones.map((milestone) => (
          <div
            key={milestone.id}
            className={`p-4 rounded-lg border-2 ${
              milestone.completed
                ? 'border-green-500 bg-green-50'
                : 'border-gray-200 bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {milestone.completed ? (
                  <Trophy className="h-6 w-6 text-green-500" />
                ) : milestone.id === 2 ? (
                  <Star className="h-6 w-6 text-yellow-500" />
                ) : (
                  <Target className="h-6 w-6 text-blue-500" />
                )}
                <div className="ml-3">
                  <h4 className="font-medium text-gray-900">{milestone.title}</h4>
                  <p className="text-sm text-gray-600">{milestone.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-indigo-600">
                  {milestone.points} points
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}