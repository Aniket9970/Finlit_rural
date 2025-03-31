import React from 'react';
import { Bell, Calendar, AlertCircle } from 'lucide-react';

interface Notification {
  id: string;
  type: 'reminder' | 'alert' | 'tip';
  message: string;
  date: string;
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'reminder',
    message: 'EMI payment due in 3 days',
    date: '2024-03-20',
  },
  {
    id: '2',
    type: 'alert',
    message: 'Your credit score has improved by 20 points',
    date: '2024-03-18',
  },
  {
    id: '3',
    type: 'tip',
    message: 'Pay your bills on time to maintain a good credit score',
    date: '2024-03-15',
  },
];

export function NotificationCenter() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Notifications</h3>
        <Bell className="h-6 w-6 text-gray-400" />
      </div>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-start p-3 bg-gray-50 rounded-md"
          >
            {notification.type === 'reminder' && (
              <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
            )}
            {notification.type === 'alert' && (
              <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
            )}
            {notification.type === 'tip' && (
              <Bell className="h-5 w-5 text-green-600 mt-0.5" />
            )}
            <div className="ml-3">
              <p className="text-sm text-gray-800">{notification.message}</p>
              <p className="text-xs text-gray-500 mt-1">{notification.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}