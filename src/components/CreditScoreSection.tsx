import React from 'react';
import { AlertCircle, CheckCircle, TrendingUp, Volume2 } from 'lucide-react';

export function CreditScoreSection() {
  return (
    <section id="credit-score" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Understanding Your Credit Score</h2>
          <button className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200">
            <Volume2 className="h-5 w-5 mr-2" />
            Listen
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-blue-600" />
              <h3 className="ml-2 text-xl font-semibold text-gray-900">What is a Credit Score?</h3>
            </div>
            <p className="text-gray-600">
              Think of it like your school report card, but for money matters. It shows how well you handle your loans and payments.
              Score ranges from 300-900.
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                750+ = Very Good
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                650-750 = Good
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Below 650 = Needs Work
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <h3 className="ml-2 text-xl font-semibold text-gray-900">Good Credit Habits</h3>
            </div>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2"></span>
                Pay your EMIs and bills before the due date
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2"></span>
                Keep your loan amounts within your paying capacity
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-2"></span>
                Clear even small pending amounts quickly
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-6 w-6 text-purple-600" />
              <h3 className="ml-2 text-xl font-semibold text-gray-900">Improve Your Score</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Simple steps to improve your score:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-100 rounded-full mr-2 flex items-center justify-center text-purple-600 text-sm">1</span>
                  Set payment reminders
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-100 rounded-full mr-2 flex items-center justify-center text-purple-600 text-sm">2</span>
                  Pay more than minimum due
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-100 rounded-full mr-2 flex items-center justify-center text-purple-600 text-sm">3</span>
                  Keep old accounts active
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}