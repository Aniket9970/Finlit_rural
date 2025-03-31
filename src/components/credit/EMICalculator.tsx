import React, { useState } from 'react';
import { Calculator, HelpCircle } from 'lucide-react';

export function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(10);
  const [tenure, setTenure] = useState<number>(12);

  const calculateEMI = () => {
    const principal = loanAmount;
    const rate = interestRate / 12 / 100;
    const time = tenure;
    const emi = principal * rate * Math.pow(1 + rate, time) / (Math.pow(1 + rate, time) - 1);
    return Math.round(emi);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Calculator className="h-6 w-6 text-indigo-600" />
        <h3 className="ml-2 text-xl font-semibold text-gray-900">EMI Calculator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Loan Amount (₹)
          </label>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{loanAmount.toLocaleString()}</span>
            <button className="text-indigo-600 hover:text-indigo-700">
              <HelpCircle className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Interest Rate (%)
          </label>
          <input
            type="range"
            min="5"
            max="20"
            step="0.5"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{interestRate}%</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Loan Tenure (months)
          </label>
          <input
            type="range"
            min="3"
            max="60"
            step="3"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{tenure} months</span>
          </div>
        </div>

        <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
          <div className="text-center">
            <p className="text-sm text-gray-600">Monthly EMI</p>
            <p className="text-3xl font-bold text-indigo-600">
              ₹{calculateEMI().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}