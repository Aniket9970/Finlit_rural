import React from 'react';
import { Bell, Calendar, AlertCircle } from 'lucide-react';

interface ReminderProps {
  type: 'payment' | 'alert' | 'tip';
  title: string;
  description: string;
  dueDate?: string;
  amount?: number;
}

export function ReminderCard({ type, title, description, dueDate, amount }: ReminderProps) {
  const getIcon = () => {
    switch (type) {
      case 'payment':
        return <Calendar className="h-5 w-5 text-blue-600" />;
      case 'alert':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'tip':
        return <Bell className="h-5 w-5 text-green-600" />;
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'payment':
        return 'bg-blue-50';
      case 'alert':
        return 'bg-yellow-50';
      case 'tip':
        return 'bg-green-50';
    }
  };

  return (
    <div className={`${getBgColor()} p-4 rounded-lg`}>
      <div className="flex items-start">
        {getIcon()}
        <div className="ml-3 flex-1">
          <h4 className="text-sm font-medium text-gray-900">{title}</h4>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
          {dueDate && (
            <p className="mt-2 text-xs text-gray-500">
              Due: {new Date(dueDate).toLocaleDateString()}
            </p>
          )}
          {amount && (
            <p className="mt-2 text-sm font-medium text-gray-900">
              Amount: ₹{amount.toLocaleString()}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}