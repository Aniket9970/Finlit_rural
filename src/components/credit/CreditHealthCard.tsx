import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';

interface CreditHealthCardProps {
  score: number;
}

export function CreditHealthCard({ score }: CreditHealthCardProps) {
  const getHealthStatus = (score: number) => {
    if (score >= 750) return { status: 'Excellent', color: 'text-green-600', icon: CheckCircle };
    if (score >= 650) return { status: 'Good', color: 'text-blue-600', icon: TrendingUp };
    return { status: 'Needs Improvement', color: 'text-yellow-600', icon: AlertTriangle };
  };

  const { status, color, icon: Icon } = getHealthStatus(score);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Credit Health</h3>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Your Score</span>
          <span className={`font-semibold ${color}`}>{score}</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 rounded-full bg-indigo-600"
            style={{ width: `${(score / 900) * 100}%` }}
          ></div>
        </div>
      </div>
      <p className={`text-sm ${color}`}>Status: {status}</p>
    </div>
  );
}