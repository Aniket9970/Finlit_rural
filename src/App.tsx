import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CreditScoreSection } from './components/CreditScoreSection';
import { QuerySection } from './components/QuerySection';
import { CreditHealthCard } from './components/credit/CreditHealthCard';
import { NotificationCenter } from './components/notifications/NotificationCenter';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <CreditHealthCard score={720} />
            </div>
            <div>
              <NotificationCenter />
            </div>
          </div>
        </div>
        <CreditScoreSection />
        <QuerySection />
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 FinLit Rural. Empowering rural communities with financial knowledge.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;