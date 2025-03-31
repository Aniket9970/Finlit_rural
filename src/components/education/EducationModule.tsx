import React from 'react';
import { Book, Calculator, FileText } from 'lucide-react';
import { ModuleCard } from './ModuleCard';
import { TabNavigation } from '../common/TabNavigation';

const modules = [
  {
    title: 'Credit Basics',
    description: 'Learn the fundamentals of credit scores and their importance',
    icon: Book,
    lessons: ['What is Credit?', 'Credit Score Range', 'Factors Affecting Credit'],
  },
  {
    title: 'Loan Management',
    description: 'Master the art of managing loans and EMIs effectively',
    icon: Calculator,
    lessons: ['EMI Calculation', 'Payment Schedules', 'Avoiding Penalties'],
  },
  {
    title: 'Financial FAQs',
    description: 'Common questions about credit and loans answered',
    icon: FileText,
    lessons: ['Credit Myths', 'Loan Terms', 'Payment Options'],
  },
];

export function EducationModule() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Educational Resources</h2>
        <TabNavigation
          tabs={['Credit Basics', 'Loan Management', 'FAQs']}
          defaultTab="Credit Basics"
        />
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </div>
    </section>
  );
}