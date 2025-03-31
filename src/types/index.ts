// Common Types
export interface User {
  id: string;
  name: string;
  preferredLanguage: string;
  creditScore: number;
  points: number;
  streak: number;
}

export interface CreditHistory {
  score: number;
  lastUpdated: string;
  history: Array<{
    date: string;
    score: number;
    change: number;
  }>;
}

export type NotificationType = 'payment' | 'alert' | 'tip' | 'achievement';
export type PaymentStatus = 'pending' | 'completed' | 'overdue';