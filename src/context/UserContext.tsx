import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { storage } from '../utils/localStorage';
import { analytics } from '../utils/analytics';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  updatePoints: (points: number) => void;
  updateStreak: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    return storage.get('user', null);
  });

  useEffect(() => {
    if (user) {
      storage.set('user', user);
    } else {
      storage.remove('user');
    }
  }, [user]);

  const updatePoints = (points: number) => {
    if (user) {
      const updatedUser = {
        ...user,
        points: user.points + points,
      };
      setUser(updatedUser);
      analytics.trackEvent('feature_use', { type: 'points_earned', points });
    }
  };

  const updateStreak = () => {
    if (user) {
      const updatedUser = {
        ...user,
        streak: user.streak + 1,
      };
      setUser(updatedUser);
      analytics.trackEvent('feature_use', { type: 'streak_updated', streak: updatedUser.streak });
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, updatePoints, updateStreak }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}